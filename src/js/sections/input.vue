<template>

    <div>
        <ItemTitle :title="title" :titleHint="titleHint" />
        <input v-if="type == 'text'"
            class="item-input"
            :class="{ 'is-error': !isValidate }"
            type="text"
            :name="name"
            :placeholder="placeholder"
            v-model="content"
            :readonly="readonly"
            @blur="onBlur" />
        <input v-else-if="type == 'tel'"
            class="item-input"
            :class="{ 'is-error': !isValidate }"
            type="tel"
            :name="name"
            :placeholder="placeholder"
            v-model="content"
            :readonly="readonly"
            @blur="onBlur" />
    </div>

</template>
<script lang="js">
import ItemTitle from './title.vue';

export default {
    name: 'ItemInput',

    components: {
        ItemTitle,
    },

    props: {
        /** title */
        title: { type: String },

        /** titleHint */
        titleHint: { type: String },

        // 内容
        value: {},

        name: { type: String },
        placeholder: { type: String },
        type: { default: 'text' },
        readonly: { type: Boolean },
        isValidate: { type: Boolean, default: true },
        parser: { type: Function },
        formatter: { type: Function },
    },

    data: function data() {
        return {
            content: '',
        };
    },

    computed: {},

    watch: {
        '$props.value': function(val) {
            this.content = this.formatter ? this.formatter(val) : val;
        },

        content: function(val) {
            this.$emit('input', this.parser ? this.parser(val) : val);
        },
    },

    methods: {
        onBlur: function() {
            this.$emit('blur');
        },
    },

    created: function() {
        this.content = this.formatter ? this.formatter(this.value || '') : (this.value || '');
    },
};
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
