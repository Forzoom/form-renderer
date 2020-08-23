import { CombinedVueInstance } from 'vue/types/vue';

interface FormRendererData {
    pageIndex: number;
}
interface FormRendererMethod {
    prevPage(): boolean;
    nextPage(): boolean;
    isFirstPage(): boolean;
    isLastPage(): boolean;
    validate(): boolean;
}

interface ValidateRule {
    required?: boolean;
    trigger?: 'blur' | 'validate';
    message?: string;
}

interface FormPageMeta {
    sections: FormSectionMeta[];
}

interface FormBasicSectionMeta {
    type: string;
    key: string;
    titleComponent: boolean;
    validates?: ValidateRule[];
}

interface ItemInputMeta extends FormBasicSectionMeta {
    type: 'ItemInput';
    titleComponent: true;
    props?: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        parser?: (str: string) => any;
        formatter?: (val: any) => string;
    };
}

interface ItemSelectMeta extends FormBasicSectionMeta {
    type: 'ItemSelect';
    titleComponent: true;
    props?: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        options?: ValueText[];
    };
}

interface ItemCascaderMeta extends FormBasicSectionMeta {
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
        fetchList: (item: CascaderItem) => CascaderItem[] | Promise<CascaderItem[]>;
    };
}

interface ItemListMeta extends FormBasicSectionMeta {
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

interface ItemTextareaMeta extends FormBasicSectionMeta {
    type: 'ItemTextarea';
    titleComponent: true;
    props?: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        max?: number;
    };
}

interface ItemButtonGroupMeta extends FormBasicSectionMeta {
    type: 'ItemButtonGroup';
    titleComponent: true;
    props?: {
        title?: string;
        titleHint?: string;
        options?: ValueText[];
        readonly?: boolean;
    };
}

interface ItemUploaderMeta extends FormBasicSectionMeta {
    type: 'ItemUploader';
    titleComponent: false;
    props: {
        title?: string;
        titleHint?: string;
        type: string;
    };
}

type FormSectionMeta = ItemInputMeta | ItemSelectMeta | ItemCascaderMeta | ItemListMeta | ItemTextareaMeta | ItemButtonGroupMeta | ItemUploaderMeta;

type FormRendererComponent = CombinedVueInstance<Vue, FormRendererData, FormRendererMethod, object, object>;
