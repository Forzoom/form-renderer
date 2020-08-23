<template>
    <div class="item-title">
        {{title}}
        <span v-if="isRequired" class="primary-color">*</span>
        <span v-if="titleHint" class="tips">{{titleHint}}</span>
    </div>
</template>

<script>
export default {
    name: 'ItemTitle',
    props: {
        title: {
            type: String,
        },
        titleHint: {
            type: String,
        },
        isRequired: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="less">
@import "../../../lib/style/mixins.less";

.item-title {
    padding: 16px 0px;
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
    .tips {
        color: #999;
        font-size: 12px;
    }
}
</style>
