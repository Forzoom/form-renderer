<script lang="js">
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
import { isUndef, checkValidate } from './utils';

export default {
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
    },

    props: {
        meta: { type: Array, default() { return []; } },
        form: { type: Object },
    },

    data: function data() {
        return {
            /**
             * 存储数据
             */
            innerForm: {},

            isValidate: {},
            pageIndex: 0,
        };
    },

    computed: {
        /**
         * 所有的规则
         */
        validateRule: function() {
            const rule = {};
            for (const page of this.meta) {
                for (const section of page.sections) {
                    if (section.validates) {
                        for (const validate of section.validates) {
                            rule[section.key] = {};
                            const trigger = validate.trigger || 'blur';
                            if (!rule[section.key][trigger]) {
                                rule[section.key][trigger] = [];
                            }
                            rule[section.key][trigger].push(validate);
                        }
                    }
                }
            }
            return rule;
        },
    },

    watch: {},

    methods: {
        /**
         * 进入前一页
         */
        prevPage: function() {
            if (this.pageIndex === 0) {
                return false;
            }
            this.pageIndex--;
            return true;
        },

        /**
         * 进入后一页
         */
        nextPage: function() {
            // 检查是否到最后一页
            if (this.pageIndex === this.meta.length - 1) {
                return false;
            }

            if (!this.validate()) {
                return false;
            }

            this.pageIndex++;
            return true;
        },

        isFirstPage: function() {
            return this.pageIndex === 0;
        },

        isLastPage: function() {
            return this.pageIndex === this.meta.length - 1;
        },

        /**
         * 检查所有规则
         */
        validate: function() {
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
                        Vue.set(this.isValidate, section.key, !failRule);
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
        },
    },

    render: function(h) {
        const children = this.meta[this.pageIndex].sections.map((section) => {
            return [
                section.titleComponent ? h('ItemTitle', {
                    props: {
                        title: section.props?.title,
                        titleHint: section.props?.titleHint,
                    },
                }) : null,
                h(section.type, {
                    props: {
                        value: this.innerForm[section.key],
                        isValidate: this.isValidate[section.key],
                        ...section.props,
                    },
                    on: {
                        input: (value) => {
                            this.innerForm[section.key] = value;
                            this.$emit('update:form', this.innerForm);

                            // 当输入时，标记为正常
                            Vue.set(this.isValidate, section.key, true);
                        },
                        blur: () => {
                            // 触发validate
                            const ruleMap = this.validateRule[section.key];
                            if (ruleMap) {
                                const value = this.innerForm[section.key];
                                const failRule = checkValidate(value, ruleMap['blur'] || []);
                                Vue.set(this.isValidate, section.key, !failRule);
                                if (failRule && failRule.message) {
                                    this.$emit('error', failRule.message);
                                }
                            }
                        },
                    },
                }),
            ];
        });
        return h('div', {}, children);
    },

    created: function() {
        if (this.form) {
            this.innerForm = this.form;
        }
    },
};
</script>
