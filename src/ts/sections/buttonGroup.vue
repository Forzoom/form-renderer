<template>
    <div class="item-button-group">
        <div class="team-level-wrap clearfix">
            <div class="team-level-item fl"
                style="text-align: left"
                v-for="(option, index) in options"
                :key="index">
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

@Component({
    name: 'ItemButtonGroup',
})
export default class ItemButtonGroup extends Vue {
    /** 内容 */
    @Prop() public value!: any;
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
    .team-level-item {
        text-align: center;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    .team-level-item:last-of-type {
        margin-right: 0;
    }
}
</style>