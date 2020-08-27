import { CombinedVueInstance } from 'vue/types/vue';
import { ComponentOptions } from 'vue';

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

export type FormRendererComponent = CombinedVueInstance<Vue, FormRendererData, FormRendererMethod, object, object>;
export type FormRendererComponentOptions = ComponentOptions<Vue, FormRendererData, FormRendererMethod>;

export const Renderer: FormRendererComponentOptions;
