<template>

    <div class="item-cascader__wrap">
        <ItemTitle :title="title" :titleHint="titleHint" />

        <div class="item-cascader" :class="{placeholder: name.length === 0, 'is-error': !isValidate}" @click="onClickPlaceholder">
            {{name || placeholder}}
        </div>

        <van-popup v-model="visible" position="bottom">
            <Cascader v-model="ids"
                @itemMap="onItemMapUpate"
                :fetchList="fetchList" @finish="onFinish" />
        </van-popup>
    </div>

</template>
<script lang="js">
import Cascader from '../components/cascader.vue';
import ItemTitle from './title.vue';

export default {
    name: 'ItemCascader',

    components: {
        ItemTitle,
        Cascader,
    },

    props: {
        /** title */
        title: { type: String },

        /** titleHint */
        titleHint: { type: String },

        value: { type: Array, default() { return []; } },
        placeholder: { type: String, default: '请选择' },
        fetchList: { required: true, type: Function },
        isValidate: { type: Boolean, default: true },
    },

    data: function data() {
        return {
            visible: false,
            ids: [],
            itemMap: {},
        };
    },

    computed: {
        name: function() {
            if (!this.itemMap) {
                return '';
            }
            return (this.value || []).map((id) => this.itemMap[id] ? this.itemMap[id].name : '').join('');
        },
    },

    watch: {
        ids: function() {
            this.$emit('input', this.ids);
        },
    },

    methods: {
        onItemMapUpate: function(itemMap) {
            this.itemMap = itemMap;
        },

        onClickPlaceholder: function() {
            this.visible = true;
        },

        onFinish: function() {
            this.visible = false;
        },
    },
};
</script>
<style lang="less">

@import "../../lib/style/mixins.less";

.item-cascader {
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    &.is-error {
        box-shadow: 0 0 1px 1px @color-red;
    }
    &.placeholder {
        color: #c8c8c8;
    }
}

</style>
