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
import ItemTitle from './title.vue';
import Uploader from '../components/uploader.vue';

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

        /** 上传函数 */
        httpRequest: { required: true, type: Function },

        /** 是否自动上传 */
        autoUpload: { type: Boolean, default: true },

        /** 是否通过验证 */
        isValiate: { type: Boolean, default: true },
    },

    data: function data() {
        return {
            /** 可能存在判断出错的情况 */
            hasUploaded: false,
        };
    },

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
                mode: 'wechat',
            };

            if (this.autoUpload) {
                this.upload(imageInfo);
            } else {
                this.$emit('input', imageInfo);
            }
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
            image = image || this.value;
            if (this.hasUploaded || !image) {
                return;
            }

            const result = await this.httpRequest(image);
            this.$emit('input', result);
            this.hasUploaded = true;
        },

        /**
         * 生命周期
         */
        beforeSubmit: async function() {
            this.upload();
        },
    },

    mounted: function() {
        if (this.value) {
            // @ts-ignore
            this.$refs.uploader.setImage(this.value.url);
            // 如果已经有数据情况下，认为已经上传了
            this.hasUploaded = true;
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
