export interface ValidateRule {
    required?: boolean;
    pattern?: RegExp;
    trigger?: 'blur' | 'validate';
    /** 最大长度 */
    max?: number;
    min?: number;
    message?: string;
}

export interface FormPageMeta {
    sections: FormSectionMeta[];
}

export interface FormBasicSectionMeta {
    type: string;
    key: string;
    titleComponent: boolean;
    validates?: ValidateRule[];
}

export interface ItemInputMeta extends FormBasicSectionMeta {
    type: 'ItemInput';
    titleComponent: true;
    props?: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        type?: 'text' | 'tel';
        parser?: (str: string) => any;
        formatter?: (val: any) => string;
    };
}

export interface ItemSelectMeta extends FormBasicSectionMeta {
    type: 'ItemSelect';
    titleComponent: true;
    props?: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        options?: ValueText[];
    };
}

export interface ItemCascaderMeta extends FormBasicSectionMeta {
    type: 'ItemCascader';
    titleComponent: true;
    props: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        itemMap: { [id: number]: CascaderItem };
        /** list数据 */
        listMap: { [id: number]: CascaderItem[] };
        /** 获取列表数据 */
        fetchList: <T extends CascaderItem>(item: T) => T[] | Promise<T[]>;
    };
}

export interface ItemListMeta extends FormBasicSectionMeta {
    type: 'ItemList';
    titleComponent: true;
    props?: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        options?: ValueText[] | (() => ValueText[]);
        multiple?: boolean;
        separator?: string;
    };
}

export interface ItemTextareaMeta extends FormBasicSectionMeta {
    type: 'ItemTextarea';
    titleComponent: true;
    props?: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        max?: number;
    };
}

export interface ItemButtonGroupMeta extends FormBasicSectionMeta {
    type: 'ItemButtonGroup';
    titleComponent: true;
    props?: {
        title?: string;
        titleHint?: string;
        options?: ValueText[];
        readonly?: boolean;
    };
}

export interface ItemUploaderMeta extends FormBasicSectionMeta {
    type: 'ItemUploader';
    titleComponent: false;
    props: {
        title?: string;
        titleHint?: string;
        /** 用于发送上传请求 */
        httpRequest: (imageInfo: ImageInfo) => ImageInfo | Promise<ImageInfo>;
        
    };
}

export interface ItemMultiUploaderMeta extends FormBasicSectionMeta {
    type: 'ItemMultiUploader';
    titleComponent: true;
    props: {
        title?: string;
        titleHint?: string;
        size?: number;
        httpRequest: (imageInfo: ImageInfo) => ImageInfo | Promise<ImageInfo>;
    };
}

export type FormSectionMeta = ItemInputMeta | ItemSelectMeta | ItemCascaderMeta | ItemListMeta | ItemTextareaMeta | ItemButtonGroupMeta | ItemUploaderMeta | ItemMultiUploaderMeta;

export interface ValueText {
    value: any;
    text: string;
}

export interface ImageInfo {
    key: string;
    url: string;
    /** file: 上传后的文件链接 wechat: 微信临时文件 */
    mode: 'file' | 'wechat';
}

export interface CascaderItem {
    id: number;
    name: string;
}
