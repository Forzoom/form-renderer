<template>

    <div class="item-textarea__wrap">
        <ItemTitle :title="title" :titleHint="titleHint" />
        <div class="item-textarea" :class="{'is-error': !isValidate}">
            <textarea class="textarea"
                v-model="content"
                :placeholder="placeholder"
                rows="6">
            </textarea>
            <div v-if="max" class="length">{{content.length}}/{{max}}</div>
        </div>
    </div>

</template>
<script lang="js">
import ItemTitle from './title.vue';

export default {
    name: 'ItemTextarea',

    components: {
        ItemTitle,
    },

    props: {
        /** title */
        title: { type: String },

        /** titleHint */
        titleHint: { type: String },

        /** 数据 */
        value: {},

        /** 占位 */
        placeholder: { type: [ String, Number] },

        /** 最大长度 */
        max: { type: Number },

        /** is error */
        isValidate: { type: Boolean, default: true },
    },

    data: function data() {
        return {
            content: '',
        };
    },

    computed: {},

    watch: {
        content: function(val) {
            const vm = this;
            if (vm.max) {
                if (val.length > vm.max) {
                    val = val.slice(0, vm.max);
                }

                vm.content = val;
            }

            vm.$emit('input', val);
        },

        '$props.value': function(val) {
            this.content = val;
        },
    },

    methods: {},

    created: function() {
        this.content = this.value || '';
    },
};
</script>
<style lang="less">

@import "../../lib/style/mixins.less";

// 输入内容
.item-textarea {
    background-color: #f2f2f2;
    &.is-error {
        box-shadow: 0 0 1px 1px @color-red;
    }
    .textarea {
        width: 100%;
        padding: 10px 15px;
        font-size: 14px;
        line-height: 25px;
        background-color: transparent;
        border-radius: 5px;
        box-sizing: border-box;
        resize: none;
        &::-webkit-input-placeholder {
            color: #c8c8c8;
        }
    }
    .length {
        padding: 0px 15px 10px;
        font-size: 12px;
        line-height: 17px;
        color: #999;
        text-align: right;
    }
}

</style>
