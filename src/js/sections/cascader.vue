<template>

    <div class="item-district" :class="{'is-error': isError}">
        <div class="item-district__inner" :class="{placeholder: name.length === 0}" @click="onClickDistrict">
            {{name || placeholder}}
        </div>

        <van-popup v-model="visible" position="bottom">
            <Cascader v-model="ids" :itemMap="itemMap" :listMap="listMap" :fetchList="fetchList" @finish="onFinish" />
        </van-popup>
    </div>

</template>
<script lang="js">
import Cascader from '../components/cascader.vue';

export default {
    name: 'ItemCascader',

    components: {
        Cascader,
    },

    props: {
        value: { type: Array, default() { return []; } },
        placeholder: { type: String, default: '请选择' },
        itemMap: { required: true, type: Object },
        listMap: { required: true, type: Object },
        fetchList: { required: true, type: Function },
        isError: { type: Boolean },
    },

    data: function data() {
        return {
            visible: false,
            ids: [],
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
        onClickDistrict: function() {
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

.item-district {
    background-color: #f2f2f2;
    border-radius: 5px;
    &.is-error {
        box-shadow: 0 0 1px 1px @color-red;
    }
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
