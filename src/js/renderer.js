import { isUndef, checkValidate } from '../ts/utils';
import '../lib/style/features.less';

export default {
    name: 'Renderer',

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
            for (let pi = 0, plen = this.meta.length; pi < plen; pi++) {
                const page = this.meta[pi];
                for (let si = 0, slen = page.sections.length; si < slen; si++) {
                    const section = page.sections[si];
                    rule[section.key] = {};
                    if (section.validates) {
                        for (let i = 0, len = section.validates.length; i < len; i++) {
                            const validate = section.validates[i];
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

    watch: {
        '$props.form': function() {
            this.innerForm = this.form;
        },
    },

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
         * 进入后一页，会检查当前页是否填写完整
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

        _getSections: function(pageIndex, form) {
            return this.meta[pageIndex].sections.filter((section) => {
                const visibleRules = section.visible;
                // 没有visible定义情况下，可以显示
                if (!visibleRules) {
                    return true;
                }
                // visible应该是一个数组
                for (let i = 0, len = visibleRules.length; i < len; i++) {
                    const rule = visibleRules[i];
                    if ('eq' in rule && form[rule.key] === rule.eq) {
                        return true;
                    }
                }
            });
        },

        /**
         * 检查所有规则
         */
        validate: function() {
            // 检查是否可以进入下一页
            const sections = this._getSections(this.pageIndex, this.innerForm);
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
                            this.$emit('error', section, failRule);
                            return false;
                        }
                    }
                }
            }

            return true;
        },

        /**
         * 提交前的最后操作，主要是uploader将未上传的文件进行上传
         */
        beforeSubmit: function() {
            let promises = [];

            for (let pi = 0, plen = this.meta.length; pi < plen; pi++) {
                const meta = this.meta[pi];
                for (let i = 0, len = meta.sections.length; i < len; i++) {
                    const section = meta.sections[i];
                    const $el = this.$refs[section.key];
                    if ($el && $el.beforeSubmit) {
                        const result = $el.beforeSubmit();
                        if (result instanceof Promise) {
                            promises.push(result);
                        }
                    }
                }
            }

            return Promise.all(promises);
        },
    },

    render: function(h) {
        const self = this;
        const children = this._getSections(self.pageIndex, self.innerForm)
        // 生成vnode
        .map((section) => {
            const value = self.innerForm[section.key];
            return [
                h(section.type, {
                    ref: section.key,
                    props: {
                        value: section.encode ? section.encode(value) : value,
                        isValidate: self.isValidate[section.key],
                        ...section.props,
                    },
                    on: {
                        input: (value) => {
                            self.innerForm[section.key] = section.decode ? section.decode(value) : value;
                            self.$emit('update:form', self.innerForm);

                            // 当输入时，标记为正常
                            self.$set(self.isValidate, section.key, true);
                        },
                        blur: () => {
                            // 触发validate
                            const ruleMap = self.validateRule[section.key];
                            if (ruleMap) {
                                const value = self.innerForm[section.key];
                                const failRule = checkValidate(value, ruleMap['blur'] || []);
                                self.$set(self.isValidate, section.key, !failRule);
                                if (failRule) {
                                    self.$emit('error', section, failRule);
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
    },

    created: function() {
        if (this.form) {
            this.innerForm = this.form;
        }
    },
};
