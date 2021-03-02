export interface ValidateRule {
    /** 提示消息 */
    message?: string;
    trigger?: 'blur' | 'validate';
    /** 是否必填 */
    required?: boolean;
    /** 正则匹配 */
    pattern?: RegExp;
    /** 最大长度，或者最大值 */
    max?: number;
    /** 最小长度，或者最小值 */
    min?: number;
    /** 使用函数来检查 */
    fn?: (value: any) => boolean;
    /** 配合旧async-validator中的内容 */
    validator?: (rule: ValidateRule, value: string, callback: any) => void;
}

export interface VisibleRule {
    key: string;
    eq?: any;
}

export interface FormPageMeta<T> {
    sections: T[];
}

export interface FormSection {
    type: string;
    key: string;
    props?: any;
    /** 数据通过input参数传递给组件时处理 */
    encode?: any;
    /** 数据通过$emit('input')传出时处理 */
    decode?: any;
    validates?: ValidateRule[];
    visible?: VisibleRule[];
}
