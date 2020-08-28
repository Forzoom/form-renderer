import { ValidateRule } from '../../types/form';

/**
 * 是否是null或者undefined
 *
 * @param {} v 参数
 *
 * @return {boolean}
 */
export function isUndef(v: any): v is (null | undefined) {
    return v === null || v === undefined;
}

export function checkValidate(value: any, rules: ValidateRule[]) {
    for (const rule of rules) {
        if (rule.required && (value === '' || isUndef(value) || value.length === 0)) {
            return rule;
        } else if (rule.pattern && value && !rule.pattern.test(value)) {
            return rule;
        } else if (rule.max != null && value != null) {
            const type = typeof value;
            if ((type == 'string' && value.length > rule.max) || (type == 'number' && value > rule.max)) {
                return rule;
            }
        }
    }
}
