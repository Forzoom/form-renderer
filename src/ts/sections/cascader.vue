<template>
    <div class="item-cascader__wrap">
        <ItemTitle :title="title" :titleHint="titleHint" />

        <div class="item-cascader" :class="{placeholder: name.length === 0, 'is-error': !isValidate}" @click="onClickPlaceholder">
            {{name || placeholder}}
        </div>

        <van-popup v-model="visible" position="bottom">
            <Cascader v-model="ids"
                @itemMap="onItemMapUpate"
                :fetchList="fetchList" @finish="onFinish" />
        </van-popup>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Cascader from '../components/cascader.vue';
import { CascaderItem } from 'types/form';
import ItemTitle from './title.vue';

@Component({
    name: 'ItemCascader',
    components: {
        ItemTitle,
        Cascader,
    },
})
export default class ItemDistrict extends Vue {
    /** title */
    @Prop({ type: String }) public title?: string;
    /** titleHint */
    @Prop({ type: String }) public titleHint?: string;
    @Prop({ type: Array, default() { return []; } }) public value?: number[];
    @Prop({ type: String, default: '请选择' }) public placeholder?: string;
    @Prop({ required: true, type: Function }) public fetchList!: <T extends CascaderItem>(item: T) => T[] | Promise<T[]>;
    @Prop({ type: Boolean, default: true }) public isValidate?: boolean;

    public visible = false;
    public ids: number[] = [];
    public itemMap: { [id: number]: CascaderItem } = {};

    public get name() {
        if (!this.itemMap) {
            return '';
        }
        return (this.value || []).map((id) => this.itemMap![id] ? this.itemMap![id].name : '').join('');
    }

    @Watch('ids')
    public onUpdateIds() {
        this.$emit('input', this.ids);
    }

    public onItemMapUpate(itemMap: { [id: number]: CascaderItem }) {
        this.itemMap = itemMap;
    }

    public onClickPlaceholder() {
        this.visible = true;
    }

    public onFinish() {
        this.visible = false;
    }
}
</script>

<style lang="less">
@import "../../lib/style/mixins.less";

.item-cascader {
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    &.is-error {
        box-shadow: 0 0 1px 1px @color-red;
    }
    &.placeholder {
        color: #c8c8c8;
    }
}
</style>