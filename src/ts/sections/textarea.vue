<template>
    <div class="item-textarea" :class="{'is-error': !isValidate}">
        <textarea class="textarea"
            v-model="content"
            :placeholder="placeholder"
            rows="6">
        </textarea>
        <div v-if="max" class="length">{{content.length}}/{{max}}</div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
    name: 'ItemTextarea',
})
export default class ItemTextarea extends Vue {
    /** 数据 */
    @Prop() public value!: any;
    /** 占位 */
    @Prop({ type: [ String, Number] }) public placeholder!: any;
    /** 最大长度 */
    @Prop({ type: Number }) public max!: any;
    /** is error */
    @Prop({ type: Boolean, default: true }) public isValidate!: boolean;

    public content = '';

    @Watch('content')
    public onContentChange(val: string) {
        const vm = this;
        if (vm.max) {
            if (val.length > vm.max) {
                val = val.slice(0, vm.max);
            }

            vm.content = val;
        }

        vm.$emit('input', val);
    }
    @Watch('$props.value')
    public onPropValueChange(val: string) {
        this.content = val;
    }

    public created() {
        this.content = this.value || '';
    }
}
</script>
<style lang="less">
@import "../../lib/style/mixins.less";

// 输入内容
.item-textarea {
    background-color: #f2f2f2;
    &.is-error {
        box-shadow: 0 0 1px 1px @color-red;
    }
    .textarea {
        width: 100%;
        padding: 10px 15px;
        font-size: 14px;
        line-height: 25px;
        background-color: transparent;
        border-radius: 5px;
        box-sizing: border-box;
        resize: none;
        &::-webkit-input-placeholder {
            color: #c8c8c8;
        }
    }
    .length {
        padding: 0px 15px 10px;
        font-size: 12px;
        line-height: 17px;
        color: #999;
        text-align: right;
    }
}
</style>
