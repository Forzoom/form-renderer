<template>
    <div class="item-list">
        <div class="item-list__inner" :class="{placeholder: isPlaceholder}" @click="onClickSubject">
            {{valueStr}}
        </div>

        <ListPopup v-model="visible" :list="optionList" actionText="确认" :multiple="multiple" @action="onClickAction" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ListPopup from '@/components/popup/listPopup.vue';

@Component({
    name: 'ItemList',
    components: {
        ListPopup,
    },
})
export default class ItemList extends Vue {
    @Prop() public value: any;
    @Prop() public options?: ValueText[] | (() => ValueText[]);
    @Prop({ type: Boolean, default: false }) public multiple!: boolean;
    @Prop({ type: String, default: '、' }) public separator!: string;
    @Prop({ type: String }) public placeholder?: string;

    public visible = false;

    public get valueStr() {
        if (this.multiple) {
            return this.value.length > 0 ? this.value.join(this.separator) : this.placeholder;
        } else {
            return this.value || this.placeholder;
        }
    }

    public get isPlaceholder() {
        return this.multiple ? !this.value.length : !this.value;
    }

    public get optionList() {
        if (!this.options) {
            return [];
        } else if (typeof this.options === 'function') {
            return this.options();
        } else {
            return this.options;
        }
    }

    public onClickSubject() {
        this.visible = true;
    }

    public onClickAction(mutlipleValue: any) {
        this.$emit('input', Object.keys(mutlipleValue).filter((key) => mutlipleValue[key]));
        this.visible = false;
    }
}
</script>

<style lang="less">
@import "../../lib/style/mixins.less";

.item-list {
    background-color: #f2f2f2;
    border-radius: 5px;
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