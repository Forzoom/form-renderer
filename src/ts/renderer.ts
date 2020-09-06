import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { FormPageMeta, ValidateRule } from '../../types/form';
import { isUndef, checkValidate } from './utils';
import '../lib/style/features.less';

@Component({
    name: 'Renderer',
})
export default class FormRenderer extends Vue {
    @Prop({ type: Array, default() { return []; } }) public meta!: FormPageMeta<any>[];
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
        for (let pi = 0, plen = this.meta.length; pi < plen; pi++) {
            const page = this.meta[pi];
            for (let si = 0, slen = page.sections.length; si < slen; si++) {
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

    @Watch('$props.form')
    public onFormChange() {
        this.innerForm = this.form;
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
            for (let i = 0, len = sections.length; i < len; i++) {
                const section = sections[i];
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

    /**
     * 提交前的最后操作，主要是uploader将未上传的文件进行上传
     */
    public async beforeSubmit() {
        for (let pi = 0, plen = this.meta.length; pi < plen; pi++) {
            const meta = this.meta[pi];
            for (let i = 0, len = meta.sections.length; i < len; i++) {
                const section = meta.sections[i];
                const $el = this.$refs[section.key];
                // @ts-ignore
                if ($el && $el.beforeSubmit) {
                    // @ts-ignore
                    await $el.beforeSubmit();
                }
            }
        }
    }

    public render(h: CreateElement) {
        const children = this.meta[this.pageIndex].sections.map((section) => {
            return [
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
