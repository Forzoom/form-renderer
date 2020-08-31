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
<script lang="js">

export default {
    name: 'ItemButtonGroup',

    props: {
        /** 内容 */
        value: {},

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
