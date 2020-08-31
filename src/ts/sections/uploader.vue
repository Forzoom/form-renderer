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

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ItemTitle from './title.vue';
import Uploader from '../components/uploader.vue';
import { WechatUploaderComponent } from '@forzoom/uploader';
import { ImageInfo } from 'types/form';

@Component({
    name: 'ItemUploader',
    components: {
        ItemTitle,
        Uploader,
    },
})
export default class ItemUploader extends Vue {
    @Prop() public value?: ImageInfo;
    @Prop({ type: String }) public title?: string;
    @Prop({ type: String }) public titleHint?: string;
    /** 上传函数 */
    @Prop({ required: true, type: Function }) public httpRequest!: (imageInfo: ImageInfo) => ImageInfo | Promise<ImageInfo>;
    /** 是否自动上传 */
    @Prop({ type: Boolean, default: true }) public autoUpload!: boolean;
    /** 是否通过验证 */
    @Prop({ type: Boolean, default: true }) public isValiate?: boolean;

    /** 可能存在判断出错的情况 */
    public hasUploaded = false;

    /**
     * 添加二维码
     */
    public onAdd({ image, serverId }: { image: string, serverId: string }) {
        const imageInfo: ImageInfo = {
            key: serverId,
            url: image,
            mode: 'wechat',
        };

        if (this.autoUpload) {
            this.upload(imageInfo);
        } else {
            this.$emit('input', imageInfo);
        }
    }
    /**
     * 删除二维码
     */
    public onRemove() {
        this.$emit('input', null);
        this.hasUploaded = false;
    }

    public onLoad() {
        this.$emit('load');
    }

    public onFinish() {
        this.$emit('finish');
    }

    /**
     * 上传流程
     */
    public async upload(image?: ImageInfo) {
        image = image || this.value;
        if (this.hasUploaded || !image) {
            return;
        }

        const result = await this.httpRequest(image);
        this.$emit('input', result);
        this.hasUploaded = true;
    }

    /**
     * 生命周期
     */
    public async beforeSubmit() {
        this.upload();
    }

    public mounted() {
        if (this.value) {
            // @ts-ignore
            this.$refs.uploader.setImage(this.value.url);
            // 如果已经有数据情况下，认为已经上传了
            this.hasUploaded = true;
        }
    }
}
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