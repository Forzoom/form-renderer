<template>
    <div class="item-district" :class="{'is-error': isError}">
        <div class="item-district__inner" :class="{placeholder: name.length === 0}" @click="onClickDistrict">
            {{name || placeholder}}
        </div>

        <van-popup v-model="visible" position="bottom">
            <Cascader v-model="ids" :itemMap="itemMap" :listMap="listMap" :fetchList="fetchList" @finish="onFinish" />
        </van-popup>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Cascader from '@/components/formRenderer/cascader.vue';

@Component({
    name: 'ItemCascader',
    components: {
        Cascader,
    },
})
export default class ItemDistrict extends Vue {
    @Prop({ type: Array, default() { return []; } }) public value?: number[];
    @Prop({ type: String, default: '请选择' }) public placeholder?: string;
    @Prop({ required: true, type: Object }) public itemMap!: { [id: number]: CascaderItem };
    @Prop({ required: true, type: Object }) public listMap!: { [id: number]: CascaderItem[] };
    @Prop({ required: true, type: Function }) public fetchList!: (item: CascaderItem) => CascaderItem[] | Promise<CascaderItem[]>;
    @Prop({ type: Boolean }) public isError?: boolean;

    public visible = false;
    public ids: number[] = [];

    public get name() {
        if (!this.itemMap) {
            return '';
        }
        return (this.value || []).map((id) => this.itemMap![id] ? this.itemMap![id].name : '').join('');
    }

    @Watch('ids')
    public onUpdateIds() {
        console.log('target3');
        this.$emit('input', this.ids);
    }

    public onClickDistrict() {
        this.visible = true;
    }

    public onFinish() {
        this.visible = false;
    }
}
</script>

<style lang="less">
@import "../../lib/style/mixins.less";

.item-district {
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