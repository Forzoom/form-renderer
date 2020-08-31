<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import ItemTitle from './sections/title.vue';
import ItemInput from './sections/input.vue';
import ItemSelect from './sections/select.vue';
import ItemCascader from './sections/cascader.vue';
import ItemList from './sections/list.vue';
import ItemButtonGroup from './sections/buttonGroup.vue';
import ItemUploader from './sections/uploader.vue';
import ItemTextarea from './sections/textarea.vue';
import ItemMultiUploader from './sections/multiUploader.vue';
import { FormPageMeta, ValidateRule } from '../../types/form';
import { isUndef, checkValidate } from './utils';

@Component({
    name: 'Renderer',
    components: {
        ItemTitle,
        ItemInput,
        ItemSelect,
        ItemCascader,
        ItemList,
        ItemButtonGroup,
        ItemUploader,
        ItemTextarea,
        ItemMultiUploader,
    },
})
export default class FormRenderer extends Vue {
    @Prop({ type: Array, default() { return []; } }) public meta!: FormPageMeta[];
    @Prop({ type: Object }) public form: any;

    /**
     * 存储数据
     */
    public innerForm: { [key: string]: any } = {};
    public isValidate: { [key: string]: boolean } = {};
    public pageIndex = 0;

    /**
     * 所有的规则
     */
    public get validateRule() {
        const rule: {
            [key: string]: {
                [trigger: string]: ValidateRule[] | undefined;
            } | undefined;
        } = {};
        for (const page of this.meta) {
            for (let si = 0, len = page.sections.length; si < len; si++) {
                const section = page.sections[si];
                rule[section.key] = {};
                if (section.validates) {
                    for (let i = 0, len = section.validates.length; i < len; i++) {
                        const validate = section.validates[i];
                        const trigger = validate.trigger || 'blur';
                        if (!rule[section.key]![trigger]) {
                            rule[section.key]![trigger] = [];
                        }
                        rule[section.key]![trigger]!.push(validate);
                    }
                }
            }
        }
        return rule;
    }

    /**
     * 进入前一页
     */
    public prevPage() {
        if (this.pageIndex === 0) {
            return false;
        }
        this.pageIndex--;
        return true;
    }
    /**
     * 进入后一页，会检查当前页是否填写完整
     */
    public nextPage() {
        // 检查是否到最后一页
        if (this.pageIndex === this.meta.length - 1) {
            return false;
        }

        if (!this.validate()) {
            return false;
        }

        this.pageIndex++;
        return true;
    }

    public isFirstPage() {
        return this.pageIndex === 0;
    }

    public isLastPage() {
        return this.pageIndex === this.meta.length - 1;
    }

    /**
     * 检查所有规则
     */
    public validate() {
        // 检查是否可以进入下一页
        const sections = this.meta[this.pageIndex].sections;
        if (sections) {
            for (const section of sections) {
                const value = this.innerForm[section.key];
                const ruleMap = this.validateRule[section.key];
                // 对于所有的trigger都处理
                for (const trigger in ruleMap) {
                    const rules = ruleMap[trigger] || [];
                    const failRule = checkValidate(value, rules);
                    this.$set(this.isValidate, section.key, !failRule);
                    if (failRule) {
                        if (failRule.message) {
                            this.$emit('error', failRule.message);
                        }
                        return false;
                    }
                }
            }
        }

        return true;
    }

    public async beforeSubmit() {
        for (let pi = 0, plen = this.meta.length; pi < plen; pi++) {
            const meta = this.meta[pi];
            for (let i = 0, len = meta.sections.length; i < len; i++) {
                const section = meta.sections[i];
                if (section.type === 'ItemMultiUploader') {
                    const $el = this.$refs[section.key];
                    // @ts-ignore
                    if ($el && $el.beforeSubmit) {
                        // @ts-ignore
                        await $el.beforeSubmit();
                    }
                }
            }
        }
    }

    public render(h: CreateElement) {
        const children = this.meta[this.pageIndex].sections.map((section) => {
            return [
                section.titleComponent ? h('ItemTitle', {
                    props: {
                        title: section.props?.title,
                        titleHint: section.props?.titleHint,
                    },
                }) : null,
                h(section.type, {
                    ref: section.key,
                    props: {
                        value: this.innerForm[section.key],
                        isValidate: this.isValidate[section.key],
                        ...section.props,
                    },
                    on: {
                        input: (value: any) => {
                            this.innerForm[section.key] = value;
                            this.$emit('update:form', this.innerForm);

                            // 当输入时，标记为正常
                            this.$set(this.isValidate, section.key, true);
                        },
                        blur: () => {
                            // 触发validate
                            const ruleMap = this.validateRule[section.key];
                            if (ruleMap) {
                                const value = this.innerForm[section.key];
                                const failRule = checkValidate(value, ruleMap['blur'] || []);
                                this.$set(this.isValidate, section.key, !failRule);
                                if (failRule && failRule.message) {
                                    this.$emit('error', failRule.message);
                                }
                            }
                        },
                    },
                }),
            ];
        });
        return h('div', {
            class: 'form-renderer',
        }, children);
    }

    public created() {
        if (this.form) {
            this.innerForm = this.form;
        }
    }
}
</script>

<style lang="less">

.form-renderer {
    .clearfix {
        &:before,
        &:after {
            content: '';
            display: table;
        }
        &:after {
            clear: both;
        }
    }
}
</style>