<template>
    <div class="item-select" :class="{'is-error': isError}">
        <div class="single-line-left">
            <slot name="left"></slot>
        </div>
        <div class="single-line-right">
            <slot name="right"></slot>
        </div>
        <div class="single-line-center-wrapper overflow">
            <select v-model="content" class="select" :class="{placeholder: value == null || value == ''}" :disabled="disabled">
                <option value="">{{placeholder}}</option>
                <option v-for="(option, index) in options"
                    :key="index"
                    :value="option.value">
                    {{option.text}}
                </option>
            </select>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
    name: 'ItemSelect',
})
export default class ItemSelect extends Vue {
    /** 内容 */
    @Prop() public value!: any;
    @Prop({ type: String }) public name!: string;
    @Prop({ type: String }) public placeholder!: string;
    /** 是否提示为空 */
    @Prop({ type: Boolean, default: false }) public blank!: boolean;
    /** 对齐 */
    @Prop({ type: String, default: 'left' }) public align!: string;
    /** 是否禁用 */
    @Prop({ type: Boolean, default: false }) public disabled!: boolean;
    /** 选择内容 */
    @Prop({ type: Array, default() { return []; } }) public options!: ValueText[];
    /** 是否错误 */
    @Prop({ type: Boolean }) public isError?: boolean;

    /** 内容 */
    public content = '';

    @Watch('$props.value')
    public onPropValueChange(val: any) {
        this.content = val;
    }
    @Watch('content')
    public onContentChange(val: string) {
        this.$emit('input', val);
    }
    public onFocus(...args: any[]) {
        this.$emit('focus', ...args);
    }

    public created() {
        this.content = this.value;
    }
}
</script>

<style lang="less">
@import "../../lib/style/mixins.less";

.item-select {
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    background-color: #f2f2f2;
    border: 1px solid transparent;
    border-radius: 5px;
    box-sizing: border-box;
    &.is-error {
        box-shadow: 0 0 1px 1px @color-red;
    }
    
    .select {
        width: 100%;
        line-height: 25px;
        background-color: transparent;
        box-sizing: border-box;
        &.padding-left {
            padding-left: 10px;
        }
        &.padding-right {
            padding-right: 10px;
        }
        &.left {
            text-align: left;
        }
        &.right {
            text-align: right;
        }
        &.center {
            text-align: center;
        }

        &.placeholder {
            color: #c8c8c8;
        }
    }
    // 未完成提醒
    &.blank {
        border-color: @color-red;
        .input {
            &::-webkit-input-placeholder {
                color: @color-red;
            }
        }
    }
}
</style>
