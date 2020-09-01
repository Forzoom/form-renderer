<template>
    <div class="item-cascader" :class="{'is-error': !isValidate}">
        <div class="item-cascader__inner" :class="{placeholder: name.length === 0}" @click="onClickPlaceholder">
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

@Component({
    name: 'ItemCascader',
    components: {
        Cascader,
    },
})
export default class ItemDistrict extends Vue {
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
    &.is-error {
        box-shadow: 0 0 1px 1px @color-red;
    }
    &__inner {
        padding: 10px 15px;
        font-size: 14px;
        line-height: 25px;
    }
    .placeholder {
        color: #c8c8c8;
    }
}
</style>