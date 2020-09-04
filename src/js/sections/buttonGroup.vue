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
<script lang="js">
import ItemTitle from './title.vue';

export default {
    name: 'ItemButtonGroup',

    components: {
        ItemTitle,
    },

    props: {
        /** 内容 */
        value: {},

        /** title */
        title: { type: String },

        /** titleHint */
        titleHint: { type: String },

        options: { required: true, type: Array },
        readonly: { type: Boolean, default: false },
    },

    data: function data() {
        return {};
    },

    computed: {},
    watch: {},

    methods: {
        onClickOption: function(option) {
            this.$emit('input', option.value);
        },
    },
};
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
