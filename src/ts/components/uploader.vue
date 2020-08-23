<template>
    <div class="hundred9-avatar-uploader" :class="{'blank': blank}">
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
            <p><i class="icon">&#xe684;</i></p>
            <p>{{hint}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
    WechatUploaderComponent, WechatImage,
} from '@forzoom/uploader';
/**
 * 班级头像上传逻辑
 *
 * - @add 数据添加
 * - @remove 数据删除
 */
@Component({
    name: 'Uploader',
})
export default class Uploader extends Vue {
    /** 提示内容 */
    @Prop({ type: String }) public hint!: any;
    /** 背景样式类 */
    @Prop({ type: [ Object, Array] }) public backgroundStyle!: any;
    /** 是否未填写 */
    @Prop({ type: Boolean, default: false }) public blank!: any;

    // 图片内容
    public image: string | null = null;

    public get opacity() {
        return this.image ? 1 : 0;
    }

    /**
     * 获得元素
     *
     * @return {} uploader
     */
    public getImage() {
        return this.image;
    }
    /**
     * 设置头像
     *
     * @param {} image 头像内容
     */
    public setImage(image: string) {
        const $uploader = this.$refs.uploader as WechatUploaderComponent;
        $uploader.setImages([
            {
                image,
                serverId: null,
            },
        ]);
        this.image = image;
    }
    /**
     * 删除当前的图片信息
     */
    public removeImage() {
        const $uploader = this.$refs.uploader as WechatUploaderComponent;
        $uploader.setImages([]);
    }
    /**
     * 数据开始加载
     */
    public onLoad() {
        this.$store.commit('startRequest');
    }
    /**
     * 图片加载完成
     */
    public onFinish() {
        this.$store.commit('endRequest');
    }
    /**
     * add事件
     *
     *  {image, serverId}
     */
    public onAdd(...args: WechatImage[]) {
        const $uploader = this.$refs.uploader as WechatUploaderComponent;
        const images = $uploader.getImages();
        this.image = images[0].image;
        this.$emit('add', ...args);
    }
    /**
     * remove事件
     *
     *  {} 可能没有数据
     */
    public onRemove(...args: WechatImage[]) {
        this.image = null;
        this.$emit('remove', ...args);
    }
}
</script>

<style lang="less">
    @import "../../lib/style/mixins.less";
    @import "../../lib/util.less";

    .hundred9-avatar-uploader {
        position: relative;
        .px2rem5(width, 72);
        .px2rem5(height, 72);
        .px2rem5(border-radius, 3);
        border: 1px solid #eaeaea;
        background-color: #fafafa;
        margin: 0 auto;
        overflow: hidden;
        .uploader-mock-background {
            color: #000;
            text-align: center;
            .px2rem5(margin-top, 25);
        }
        &.blank {
            border: 1px solid @primary-color;
            .uploader-mock-background {
                color: @primary-color;
            }
        }
        .icon {
            .px2rem5(font-size, 20);
        }

        // 对于uploader样式的更正
        .ro-uploader-wrap {
            .ro-uploader-request.loaderImg {
                .xtrM(width, 72);
                .xtrM(height, 72);
                margin-right: 0;
            }
            .ro-uploader-image-wrap {
                position: relative;
                .ro-uploader-image.loaderImg {
                    .xtrM(width, 72);
                    .xtrM(height, 72);
                }
                .remove-wrapper {
                    position: absolute;
                    .xtrM(width, 72);
                    .xtrM(height, 20);
                    left: 0;
                    bottom: 0;
                }
                .ro-uploader-remove {
                    position: absolute;
                    .xtrM(width, 72);
                    .xtrM(height, 20);
                    .xtrM(line-height, 20);
                    .xtrM(font-size, 12);
                    left: 0;
                    .px2rem6(top, 62) !important;
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
                        .xtrM(font-size, 12);
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
            .xtrM(width, 72);
            .xtrM(height, 72);
        }
        .upLoaderImg {
            .px2rem5(width, 72);
            .px2rem5(height, 72);
            position: absolute;
        }

        .uploader-mock-background {
            position: absolute;
            top: 0;
            .px2rem5(width, 72);
            .px2rem5(height, 72);
            text-align: center;
        }
    }
</style>