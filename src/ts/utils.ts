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

/**
 * 是否是某种类型
 */
export function isType<T>(name: string) {
    return (val: any): val is T => {
        return Object.prototype.toString.call(val) === `[object ${name}]`;
    };
}

export const isArray: <T = any>(val: any) => val is T[] = Array.isArray || isType(name);

export function checkValidate(value: any, rules: ValidateRule[]) {
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
