<template>
    <div class="item-button-group">
        <ItemTitle :title="title" :titleHint="titleHint" />
        <div class="clearfix">
            <div v-for="(option, index) in options"
                :key="index"
                class="item-button-item fl"
                style="text-align: left">
                <MobileButton class="team-level"
                    :class="{selected: value == option.value}"
                    name="level-selected"
                    :is-disabled="readonly"
                    @click="onClickOption(option)">
                    {{option.text}}
                </MobileButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ValueText } from 'types/form';
import ItemTitle from './title.vue';

@Component({
    name: 'ItemButtonGroup',
    components: {
        ItemTitle,
    },
})
export default class ItemButtonGroup extends Vue {
    /** 内容 */
    @Prop() public value!: any;
    /** title */
    @Prop({ type: String }) public title?: string;
    /** titleHint */
    @Prop({ type: String }) public titleHint?: string;
    @Prop({ required: true, type: Array }) public options!: ValueText[];
    @Prop({ type: Boolean, default: false }) public readonly!: boolean;

    public onClickOption(option: ValueText) {
        this.$emit('input', option.value);
    }
}
</script>

<style lang="less">
@import "../../lib/style/mixins.less";

.item-button-group {
    .item-button-item {
        text-align: center;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    .item-button-item:last-of-type {
        margin-right: 0;
    }
}
</style>