(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es.array.filter'), require('core-js/modules/es.array.iterator'), require('core-js/modules/es.array.map'), require('core-js/modules/es.object.to-string'), require('core-js/modules/es.promise'), require('core-js/modules/es.string.iterator'), require('core-js/modules/web.dom-collections.iterator'), require('core-js/modules/es.array.is-array'), require('core-js/modules/es.date.to-string'), require('core-js/modules/es.regexp.to-string')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es.array.filter', 'core-js/modules/es.array.iterator', 'core-js/modules/es.array.map', 'core-js/modules/es.object.to-string', 'core-js/modules/es.promise', 'core-js/modules/es.string.iterator', 'core-js/modules/web.dom-collections.iterator', 'core-js/modules/es.array.is-array', 'core-js/modules/es.date.to-string', 'core-js/modules/es.regexp.to-string'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FormRenderer = {}));
}(this, (function (exports) { 'use strict';

  function __$styleInject(css) {
      if (!css) return;

      if (typeof window == 'undefined') return;
      var style = document.createElement('style');
      style.setAttribute('media', 'screen');

      style.innerHTML = css;
      document.head.appendChild(style);
      return css;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
   * 是否是null或者undefined
   *
   * @param {} v 参数
   *
   * @return {boolean}
   */
  function isUndef(v) {
    return v === null || v === undefined;
  }
  /**
   * 是否是某种类型
   */

  function isType(name) {
    return function (val) {
      return Object.prototype.toString.call(val) === "[object ".concat(name, "]");
    };
  }
  var isArray = Array.isArray || isType('Array');
  /**
   * 检测值是否匹配规则，如果匹配，返回null，否则返回匹配失败的规则
   * @param value 值
   * @param rules 检查规则
   * @returns {ValidateRule | null} 失败的规则
   */

  function checkValidate(value, rules) {
    for (var i = 0, len = rules.length; i < len; i++) {
      var rule = rules[i];

      if (rule.required && (value === '' || isUndef(value) || value.length === 0)) {
        // 检查require
        return rule;
      } else if (rule.pattern && value && !rule.pattern.test(value)) {
        // 检查pattern
        return rule;
      } else if (rule.max != null && value != null) {
        // 检查max
        var type = _typeof(value);

        if ((type == 'string' || isArray(value)) && value.length > rule.max || type == 'number' && value > rule.max) {
          return rule;
        }
      } else if (rule.min != null && value != null) {
        // 检查min
        var _type = _typeof(value);

        if ((_type == 'string' || isArray(value)) && value.length < rule.min || _type == 'number' && value < rule.min) {
          return rule;
        }
      } else if (rule.fn != null) {
        // 检查fn
        if (!rule.fn(value)) {
          return rule;
        }
      } else if (rule.validator != null) {
        // 只是针对于validator的同步形式的处理
        var result = null;

        var callback = function callback(val) {
          result = val;
        };

        rule.validator(rule, value, callback);

        if (result) {
          return rule;
        }
      }
    }

    return null;
  }

  __$styleInject(".form-renderer .icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n.form-renderer .clearfix:before,\n.form-renderer .clearfix:after {\n  content: '';\n  display: table;\n}\n.form-renderer .clearfix:after {\n  clear: both;\n}\n");

  var renderer = {
    name: 'Renderer',
    props: {
      meta: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      form: {
        type: Object
      }
    },
    data: function data() {
      return {
        /**
         * 存储数据
         */
        innerForm: {},
        isValidate: {},
        pageIndex: 0
      };
    },
    computed: {
      /**
       * 所有的规则
       */
      validateRule: function validateRule() {
        var rule = {};

        for (var pi = 0, plen = this.meta.length; pi < plen; pi++) {
          var page = this.meta[pi];

          for (var si = 0, slen = page.sections.length; si < slen; si++) {
            var section = page.sections[si];
            rule[section.key] = {};

            if (section.validates) {
              for (var i = 0, len = section.validates.length; i < len; i++) {
                var validate = section.validates[i];
                var trigger = validate.trigger || 'blur';

                if (!rule[section.key][trigger]) {
                  rule[section.key][trigger] = [];
                }

                rule[section.key][trigger].push(validate);
              }
            }
          }
        }

        return rule;
      }
    },
    watch: {
      '$props.form': function $propsForm() {
        this.innerForm = this.form;
      }
    },
    methods: {
      /**
       * 进入前一页
       */
      prevPage: function prevPage() {
        if (this.pageIndex === 0) {
          return false;
        }

        this.pageIndex--;
        return true;
      },

      /**
       * 进入后一页，会检查当前页是否填写完整
       */
      nextPage: function nextPage() {
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
      isFirstPage: function isFirstPage() {
        return this.pageIndex === 0;
      },
      isLastPage: function isLastPage() {
        return this.pageIndex === this.meta.length - 1;
      },
      _getSections: function _getSections(pageIndex, form) {
        return this.meta[pageIndex].sections.filter(function (section) {
          var visibleRules = section.visible; // 没有visible定义情况下，可以显示

          if (!visibleRules) {
            return true;
          } // visible应该是一个数组


          for (var i = 0, len = visibleRules.length; i < len; i++) {
            var rule = visibleRules[i];

            if ('eq' in rule && form[rule.key] === rule.eq) {
              return true;
            }
          }
        });
      },

      /**
       * 检查所有规则
       */
      validate: function validate() {
        // 检查是否可以进入下一页
        var sections = this._getSections(this.pageIndex, this.innerForm);

        if (sections) {
          for (var i = 0, len = sections.length; i < len; i++) {
            var section = sections[i];
            var value = this.innerForm[section.key];
            var ruleMap = this.validateRule[section.key]; // 对于所有的trigger都处理

            for (var trigger in ruleMap) {
              var rules = ruleMap[trigger] || [];
              var failRule = checkValidate(value, rules);
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
      beforeSubmit: function beforeSubmit() {
        var promises = [];

        for (var pi = 0, plen = this.meta.length; pi < plen; pi++) {
          var meta = this.meta[pi];

          for (var i = 0, len = meta.sections.length; i < len; i++) {
            var section = meta.sections[i];
            var $el = this.$refs[section.key];

            if ($el && $el.beforeSubmit) {
              var result = $el.beforeSubmit();

              if (result instanceof Promise) {
                promises.push(result);
              }
            }
          }
        }

        return Promise.all(promises);
      }
    },
    render: function render(h) {
      var self = this;

      var children = this._getSections(self.pageIndex, self.innerForm) // 生成vnode
      .map(function (section) {
        var value = self.innerForm[section.key];
        return [h(section.type, {
          ref: section.key,
          props: _objectSpread2({
            value: section.encode ? section.encode(value) : value,
            isValidate: self.isValidate[section.key]
          }, section.props),
          on: {
            input: function input(value) {
              self.innerForm[section.key] = section.decode ? section.decode(value) : value;
              self.$emit('update:form', self.innerForm); // 当输入时，标记为正常

              self.$set(self.isValidate, section.key, true);
            },
            blur: function blur() {
              // 触发validate
              var ruleMap = self.validateRule[section.key];

              if (ruleMap) {
                var _value = self.innerForm[section.key];
                var failRule = checkValidate(_value, ruleMap['blur'] || []);
                self.$set(self.isValidate, section.key, !failRule);

                if (failRule) {
                  self.$emit('error', section, failRule);
                }
              }
            }
          }
        })];
      });

      return h('div', {
        "class": 'form-renderer'
      }, children);
    },
    created: function created() {
      if (this.form) {
        this.innerForm = this.form;
      }
    }
  };

  exports.Renderer = renderer;
  exports.checkValidate = checkValidate;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
