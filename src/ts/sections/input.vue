<template>
    <div>
        <input v-if="type == 'text'"
            class="item-input"
            :class="{ 'is-error': isError }"
            type="text"
            :name="name"
            :placeholder="placeholder"
            v-model="content"
            :readonly="readonly"
            @blur="onBlur" />
        <input v-else-if="type == 'tel'"
            class="item-input"
            :class="{ 'is-error': isError }"
            type="tel"
            :name="name"
            :placeholder="placeholder"
            v-model="content"
            :readonly="readonly"
            @blur="onBlur" />
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
    name: 'ItemInput',
})
export default class ItemInput extends Vue {
    // 内容
    @Prop() public value!: any;
    @Prop({ type: String }) public name!: any;
    @Prop({ type: String }) public placeholder!: any;
    @Prop({ default: 'text' }) public type!: any;
    @Prop({ type: Boolean }) public readonly!: any;
    @Prop({ type: Boolean }) public isError!: boolean;
    @Prop({ type: Function }) public parser: any;
    @Prop({ type: Function }) public formatter: any;

    public content = '';

    @Watch('$props.value')
    public onPropValueChange(val: any) {
        this.content = this.formatter ? this.formatter(val) : val;
    }
    @Watch('content')
    public onContentChange(val: string) {
        this.$emit('input', this.parser ? this.parser(val) : val);
    }

    public onBlur() {
        this.$emit('blur');
    }

    public created() {
        this.content = this.formatter ? this.formatter(this.value || '') : (this.value || '');
    }
}
</script>
<style lang="less">
@import "../../lib/style/mixins.less";

.item-input {
    width: 100%;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-sizing: border-box;
    &::-webkit-input-placeholder {
        color: #c8c8c8;
    }
    &.is-error {
        box-shadow: 0 0 1px 1px @color-red;
    }
}
</style>
