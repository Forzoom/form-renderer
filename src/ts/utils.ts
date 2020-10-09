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

/**
 * 检测值是否匹配规则，如果匹配，返回null，否则返回匹配失败的规则
 * @param value 值
 * @param rules 检查规则
 * @returns {ValidateRule | null}
 */
export function checkValidate(value: any, rules: ValidateRule[]): ValidateRule | null {
    for (let i = 0, len = rules.length; i < len; i++) {
        const rule = rules[i];
        if (rule.required && (value === '' || isUndef(value) || value.length === 0)) {
            // 检查require
            return rule;
        } else if (rule.pattern && value && !rule.pattern.test(value)) {
            // 检查pattern
            return rule;
        } else if (rule.max != null && value != null) {
            // 检查max
            const type = typeof value;
            if (((type == 'string' || isArray(value)) && value.length > rule.max) || (type == 'number' && value > rule.max)) {
                return rule;
            }
        } else if (rule.min != null && value != null) {
            // 检查min
            const type = typeof value;
            if (((type == 'string' || isArray(value)) && value.length < rule.min) || (type == 'number' && value < rule.min)) {
                return rule;
            }
        } else if (rule.fn != null && value != null) {
            // 检查fn
            if (!rule.fn(value)) {
                return rule;
            }
        }
    }
    return null;
}
