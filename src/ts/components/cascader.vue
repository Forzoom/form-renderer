<template>
    <div class="cascader">
        <div class="clearfix white-bg">
            <div v-for="(name, index) in crumbs"
                :key="index"
                class="cascader__crumb"
                :class="{selected: level == index}"
                @click="onClickCrumb(index)">
                {{name}}
            </div>
        </div>
        <div class="cascader__level">
            <div v-for="item in list"
                :key="item.id"
                class="cascader__item after-line"
                :class="{selected: item.id == value[level]}"
                @click="onClickItem(item, level)">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import {
    isUndef,
} from '../utils';
import { CascaderItem } from 'types/form';

/**
 * @update(names, ids) 数据更新
 * @finish() 点击最后一级的情况下触发事件，可能使用于当点击最后一级的情况下，将关闭地址选择组件
 */
@Component({
    name: 'Cascader',
})
export default class Cascader extends Vue {
    /** 默认显示的位置内容 */
    @Prop({ type: Array, default() { return []; } }) public value!: number[];
    /** 最大的level，默认为3，只允许显示 <= maxLevel 的内容 */
    @Prop({ type: Number, default: 3 }) public maxLevel!: number;
    /** item数据 */
    // @Prop({ required: true, type: Object }) public itemMap!: { [id: number]: CascaderItem };
    /** list数据 */
    // @Prop({ required: true, type: Object }) public listMap!: { [id: number]: CascaderItem[] };
    /** 获取列表数据 */
    @Prop({ required: true, type: Function }) public fetchList!: (item: CascaderItem) => CascaderItem[];

    /** 当前显示的level */
    public level = 0;

    public itemMap: { [id: number]: CascaderItem } = {};
    public listMap: { [id: number]: CascaderItem[] } = {};

    public get list() {
        return this.level === 0 ? this.listMap[0] : this.listMap[this.value[this.level - 1]];
    }
    /**
     * 如果没有的情况下，返回null
     *
     * @return {Number|null} 最后一级districtId，当没有districtIds时候返回null
     */
    public get lastId() {
        const len = this.value.length;
        if (len === 0) {
            return null;
        }
        return this.value[len - 1];
    }
    /**
     * 指示下一列是否存在
     *
     * 1. 当前列数>=3的情况 -> false
     * 2. isUndef(lastDistrictId) -> true
     * 3. district的level达到标准的情况下 -> false
     * 4. !list == null && !(list.length === 0)
     */
    public get moreColumnVisible() {
        // 如果列数已经到达了3
        if (this.value.length >= this.maxLevel) {
            return false;
        }
        // 如果最后一个districtId不存在情况下，表明当前没有任何级别被选中
        const lastId = this.lastId;
        // 如果最后一级的list不存在，那么返回false
        if (isUndef(this.listMap[lastId!]) || !this.listMap[lastId!].length) {
            return false;
        }
        if (isUndef(lastId)) {
            return true;
        }
        return true;
    }

    /**
     * 所需要显示的面包屑导航
     *
     * - 当没有的情况下，将会默认显示一列内容
     */
    public get crumbs() {
        if (this.value.length > 0) {
            const result = this.value.map((id) => {
                const item = this.itemMap[id];
                return item ? item.name : '';
            });
            if (this.moreColumnVisible) {
                result.push('请选择');
            }
            return result;
        } else {
            return [
                '请选择',
            ];
        }
    }

    public async innerFetchList(item: CascaderItem) {
        const ret = await this.fetchList(item);
        for (let i = 0, len = ret.length ; i < len; i++) {
            this.$set(this.itemMap, ret[i].id, ret[i]);
        }
        this.$set(this.listMap, item.id, ret);
        return ret;
    }
    /**
     * 当address被点击
     *
     * @param {} id 行政区id
     * @param {} column 列数，从0开始
     */
    public async onClickItem(item: CascaderItem, level: number) {
        // 删除被点击level开始之后的所有id，保留level之前的所有的id
        const ids = this.value.slice(0, level);
        // 更新ids
        ids.push(item.id);

        const list = await this.innerFetchList(item);
        if (list.length > 0) {
            this.level = level + 1;
        }

        this.$emit('input', ids);

        this.$nextTick(() => {
            if (!this.moreColumnVisible) {
                this.$emit('finish');
            }
        });
    }
    /**
     * 点击面包屑的时候
     *
     * @param {} index 导航的位置
     */
    public onClickCrumb(level: number) {
        this.level = level;
    }

    public created() {
        this.innerFetchList({ id: 0, name: '' });
    }
}
</script>

<style lang="less">
@import "../../lib/style/mixins.less";

@display-count: 6; // 默认显示个数
@line-height: 22px;
@padding-vertical: 7px;
@padding-horizontal: 20px;

.cascader {
    &__crumb {
        float: left;
        padding: @padding-vertical 10px;
        font-size: 12px;
        line-height: @line-height;
        background-color: @color-white;
        border-bottom: 1px solid @color-white;
        &.selected {
            border-bottom: 1px solid @color-red;
        }
    }

    &__level {
        height: @display-count * (@padding-vertical * 2 + @line-height);
        -webkit-overflow-scrolling: touch;
        overflow-y: auto;
    }

    &__item {
        position: relative;
        padding: @padding-vertical @padding-horizontal;
        font-size: 12px;
        line-height: @line-height;
        background-color: @color-white;
        &:after {
            left: 15px;
        }
        &.selected {
            color: @color-red;
        }
        &:last-child:after {
            display: none;
        }
    }
}
</style>
