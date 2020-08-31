<template>

    <div class="item-select" :class="{'is-error': !isValidate}">
        <div class="single-line-left">
            <slot name="left"></slot>
        </div>
        <div class="single-line-right">
            <slot name="right"></slot>
        </div>
        <div class="single-line-center-wrapper overflow">
            <select v-model="content" class="select" :class="{placeholder: value == null || value == ''}" :disabled="disabled">
                <option value="">{{placeholder}}</option>
                <option v-for="(option, index) in options"
                    :key="index"
                    :value="option.value">
                    {{option.text}}
                </option>
            </select>
        </div>
    </div>

</template>
<script lang="js">

export default {
    name: 'ItemSelect',

    props: {
        /** 内容 */
        value: {},

        name: { type: String },
        placeholder: { type: String },

        /** 是否提示为空 */
        blank: { type: Boolean, default: false },

        /** 对齐 */
        align: { type: String, default: 'left' },

        /** 是否禁用 */
        disabled: { type: Boolean, default: false },

        /** 选择内容 */
        options: { type: Array, default() { return []; } },

        /** 是否错误 */
        isValidate: { type: Boolean },
    },

    data: function data() {
        return {
            /** 内容 */
            content: '',
        };
    },

    computed: {},

    watch: {
        '$props.value': function(val) {
            this.content = val;
        },

        content: function(val) {
            this.$emit('input', val);
        },
    },

    methods: {},

    created: function() {
        this.content = this.value;
    },
};
</script>
<style lang="less">

@import "../../lib/style/mixins.less";

.item-select {
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    background-color: #f2f2f2;
    border: 1px solid transparent;
    border-radius: 5px;
    box-sizing: border-box;
    &.is-error {
        box-shadow: 0 0 1px 1px @color-red;
    }
    
    .select {
        width: 100%;
        line-height: 25px;
        background-color: transparent;
        box-sizing: border-box;
        &.padding-left {
            padding-left: 10px;
        }
        &.padding-right {
            padding-right: 10px;
        }
        &.left {
            text-align: left;
        }
        &.right {
            text-align: right;
        }
        &.center {
            text-align: center;
        }

        &.placeholder {
            color: #c8c8c8;
        }
    }
    // 未完成提醒
    &.blank {
        border-color: @color-red;
        .input {
            &::-webkit-input-placeholder {
                color: @color-red;
            }
        }
    }
}

</style>
