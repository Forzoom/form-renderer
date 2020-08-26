<template>

    <div class="item-list">
        <div class="item-list__inner" :class="{placeholder: isPlaceholder}" @click="onClickSubject">
            {{valueStr}}
        </div>

        <!-- <ListPopup v-model="visible" :list="optionList" actionText="确认" :multiple="multiple" @action="onClickAction" /> -->
    </div>

</template>
<script lang="js">
// import ListPopup from '@/components/popup/listPopup.vue';

export default {
    name: 'ItemList',

    props: {
        value: {},
        options: {},
        multiple: { type: Boolean, default: false },
        separator: { type: String, default: '、' },
        placeholder: { type: String },
    },

    data: function data() {
        return {
            visible: false,
        };
    },

    computed: {
        valueStr: function() {
            if (this.multiple) {
                return this.value.length > 0 ? this.value.join(this.separator) : this.placeholder;
            } else {
                return this.value || this.placeholder;
            }
        },

        isPlaceholder: function() {
            return this.multiple ? !this.value.length : !this.value;
        },

        optionList: function() {
            if (!this.options) {
                return [];
            } else if (typeof this.options === 'function') {
                return this.options();
            } else {
                return this.options;
            }
        },
    },

    watch: {},

    methods: {
        onClickSubject: function() {
            this.visible = true;
        },

        onClickAction: function(mutlipleValue) {
            this.$emit('input', Object.keys(mutlipleValue).filter((key) => mutlipleValue[key]));
            this.visible = false;
        },
    },
};
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
