<template>

    <div class="form-renderer-uploader" :class="{'blank': blank}">
        <WechatUploader
            ref="uploader"
            :size="1"
            :can-modify="true"
            :container-class="[ 'loaderImg' ]"
            :container-style="{ 'opacity': opacity, 'z-index': 1, position: 'relative' }"
            :request-class="[ 'loaderImg' ]"
            :image-class="[ 'loaderImg']"
            @add="onAdd"
            @remove="onRemove"
            @load="onLoad"
            @finish="onFinish">
        </WechatUploader>
        <div class="uploader-mock-background" :style="backgroundStyle">
            <p>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconxiangji1"></use>
                </svg>
            </p>
            <p>{{hint}}</p>
        </div>
    </div>

</template>
<script lang="js">
/**
 * 班级头像上传逻辑
 *
 * - @add 数据添加
 * - @remove 数据删除
 */
export default {
    name: 'Uploader',

    props: {
        /** 提示内容 */
        hint: { type: String },

        /** 背景样式类 */
        backgroundStyle: { type: [ Object, Array] },

        /** 是否未填写 */
        blank: { type: Boolean, default: false },
    },

    data: function data() {
        return {
            // 图片内容
            image: null,
        };
    },

    computed: {
        opacity: function() {
            return this.image ? 1 : 0;
        },
    },

    watch: {},

    methods: {
        /**
         * 获得元素
         *
         * @return {} uploader
         */
        getImage: function() {
            return this.image;
        },

        /**
         * 设置头像
         *
         * @param {} image 头像内容
         */
        setImage: function(image) {
            const $uploader = this.$refs.uploader;
            $uploader.setImages([
                {
                    image,
                    serverId: null,
                },
            ]);
            this.image = image;
        },

        /**
         * 删除当前的图片信息
         */
        removeImage: function() {
            const $uploader = this.$refs.uploader;
            $uploader.setImages([]);
        },

        /**
         * 数据开始加载
         */
        onLoad: function() {
            this.$emit('load');
        },

        /**
         * 图片加载完成
         */
        onFinish: function() {
            this.$emit('finish');
        },

        /**
         * add事件
         *
         *  {image, serverId}
         */
        onAdd: function(...args) {
            const $uploader = this.$refs.uploader;
            const images = $uploader.getImages();
            this.image = images[0].image;
            this.$emit('add', ...args);
        },

        /**
         * remove事件
         *
         *  {} 可能没有数据
         */
        onRemove: function(...args) {
            this.image = null;
            this.$emit('remove', ...args);
        },
    },
};
</script>
<style lang="less">

@import "../../lib/style/mixins.less";

.form-renderer-uploader {
    position: relative;
    width: 84px;
    height: 84px;
    border-radius: 3px;
    border: 1px solid #eaeaea;
    background-color: #fafafa;
    margin: 0 auto;
    overflow: hidden;
    .uploader-mock-background {
        color: #000;
        text-align: center;
        margin-top: 30px;
    }
    &.blank {
        border: 1px solid @color-red;
        .uploader-mock-background {
            color: @color-red;
        }
    }
    .icon {
        font-size: 23px;
    }

    // 对于uploader样式的更正
    .ro-uploader-wrap {
        .ro-uploader-request.loaderImg {
            width: 84px !important;
            height: 84px !important;
            margin-right: 0;
        }
        .ro-uploader-image-wrap {
            position: relative;
            .ro-uploader-image.loaderImg {
                width: 84px !important;
                height: 84px !important;
            }
            .remove-wrapper {
                position: absolute;
                width: 84px !important;
                height: 23px !important;
                left: 0;
                top: 61px;
            }
            .ro-uploader-remove {
                position: absolute;
                width: 84px !important;
                height: 23px !important;
                line-height: 23px !important;
                font-size: 14px !important;
                left: 0;
                top: 0 !important;
                color: #666;
                background-color: rgba(0, 0, 0, 0.5) !important;
                &:before {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100% !important;
                    height: 0 !important;
                    content: '更换图片';
                    color: @color-white;
                    font-size: 14px;
                    text-align: center;
                    transform: translate(-50%,-50%) rotate(0deg);
                }
                &:after {
                    width: 0 !important;
                    height: 0 !important;
                }
                &:active {
                    border-color: @color-white;
                    &:before,
                    &:after {
                        background-color: @color-white;
                    }
                }
            }
        }
    }

    .loaderImg {
        width: 84px !important;
        height: 84px !important;
    }
    .upLoaderImg {
        width: 84px;
        height: 84px;
        position: absolute;
    }

    .uploader-mock-background {
        position: absolute;
        top: 0;
        width: 84px;
        height: 84px;
        text-align: center;
    }
}

</style>
