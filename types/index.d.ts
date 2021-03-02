import { CombinedVueInstance } from 'vue/types/vue';
import { ComponentOptions } from 'vue';
import { ValidateRule } from './form';

interface FormRendererData {
    pageIndex: number;
}
interface FormRendererMethod {
    prevPage(): boolean;
    nextPage(): boolean;
    isFirstPage(): boolean;
    isLastPage(): boolean;
    validate(): boolean;
    beforeSubmit(): void;
}

export type FormRendererComponent = CombinedVueInstance<Vue, FormRendererData, FormRendererMethod, object, object>;
export type FormRendererComponentOptions = ComponentOptions<Vue, FormRendererData, FormRendererMethod>;

export const Renderer: FormRendererComponentOptions;
export const checkValidate: (value: any, rules: ValidateRule[]) => ValidateRule | null;
