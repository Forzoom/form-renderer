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

export function checkValidate(value, rules) {
    for (const rule of rules) {
        if (rule.required && (value === '' || isUndef(value) || value.length === 0)) {
            return rule;
        } else if (rule.pattern && value && !rule.pattern.test(value)) {
            return rule;
        }
    }
}
