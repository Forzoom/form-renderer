<template>

    <div class="item-uploader clearfix">
        <Uploader
            ref="uploader"
            class="fr"
            :black="!isValiate"
            @add="onAdd"
            @remove="onRemove"
            @load="onLoad"
            @finish="onFinish">
        </Uploader>
        <div class="code-title">
            <ItemTitle :title="title"></ItemTitle>
            <div v-if="titleHint" class="title-hint">{{titleHint}}</div>
        </div>
    </div>

</template>
<script lang="js">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ItemTitle from './title.vue';
import Uploader from '../components/uploader.vue';
import { WechatUploaderComponent } from '@forzoom/uploader';
import { ImageInfo } from 'types/form';

export default {
    name: 'ItemUploader',

    components: {
        ItemTitle,
        Uploader,
    },

    props: {
        value: {},
        title: { type: String },
        titleHint: { type: String },
        httpRequest: { required: true, type: Function },
        isValiate: { type: Boolean, default: true },
    },

    data: function data() {
        return {
            hasUploaded: true,
        };
    },

    computed: {},
    watch: {},

    methods: {
        /**
         * 添加二维码
         */
        onAdd: function(
            {
                image,
                serverId,
            },
        ) {
            const imageInfo = {
                key: serverId,
                url: image,
            };

            this.upload(imageInfo);
        },

        /**
         * 删除二维码
         */
        onRemove: function() {
            this.$emit('input', null);
            this.hasUploaded = false;
        },

        onLoad: function() {
            this.$emit('load');
        },

        onFinish: function() {
            this.$emit('finish');
        },

        /**
         * 上传流程
         */
        upload: async function(image) {
            const result = await this.httpRequest(image);
            this.$emit('input', result);
            this.hasUploaded = true;
        },
    },

    mounted: function() {
        if (this.value) {
            // @ts-ignore
            this.$refs.uploader.setImage(this.value.url);
        }
    },
};
</script>
<style lang="less">

@import "../../lib/style/mixins.less";

.item-uploader {
    padding: 20px 0 0px;
    text-align: center;
    .ro-uploader-wrap {
        width: 72px;
        height: 72px;
        .ro-uploader-image-wrap {
            .ro-uploader-image.loaderImg {
                background-size: cover;
                background-position: center;
            }
        }
    }

    .code-title {
        padding-right: 10px;
        .text-normal();
        color: #101010;
        text-align: left;
        overflow: hidden;
        .item-title {
            padding: 6px 0 0px;
        }
        .title-hint {
            margin-top: 4px;
            color: #999;
        }
    }
}

</style>
