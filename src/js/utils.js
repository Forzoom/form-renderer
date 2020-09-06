/**
 * 是否是null或者undefined
 *
 * @param {} v 参数
 *
 * @return {boolean}
 */
export function isUndef(v) {
    return v === null || v === undefined;
}

/**
 * 是否是某种类型
 */
export function isType(name) {
    return (val) => {
        return Object.prototype.toString.call(val) === `[object ${name}]`;
    };
}

export const isArray = Array.isArray || isType(name);

export function checkValidate(value, rules) {
    for (let i = 0, len = rules.length; i < len; i++) {
        const rule = rules[i];
        if (rule.required && (value === '' || isUndef(value) || value.length === 0)) {
            return rule;
        } else if (rule.pattern && value && !rule.pattern.test(value)) {
            return rule;
        } else if (rule.max != null && value != null) {
            const type = typeof value;
            if (((type == 'string' || isArray(value)) && value.length > rule.max) || (type == 'number' && value > rule.max)) {
                return rule;
            }
        } else if (rule.min != null && value != null) {
            const type = typeof value;
            if (((type == 'string' || isArray(value)) && value.length < rule.min) || (type == 'number' && value < rule.min)) {
                return rule;
            }
        }
    }
}
