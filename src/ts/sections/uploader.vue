<template>
    <div class="item-uploader clearfix">
        <Uploader
            ref="uploader"
            class="fr"
            :black="isError"
            @add="onAddCode"
            @remove="onRemoveCode">
        </Uploader>
        <div class="code-title">
            <ItemTitle :title="title"></ItemTitle>
            <div v-if="titleHint" class="title-hint">{{titleHint}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ItemTitle from '@/components/formRenderer/itemTitle.vue';
import Uploader from '@/ts/components/uploader.vue';
import { WechatUploaderComponent } from '@forzoom/uploader';

@Component({
    name: 'ItemUploader',
    components: {
        ItemTitle,
        Uploader,
    },
})
export default class ItemUploader extends Vue {
    @Prop() public value?: ImageInfo | null;
    @Prop({ type: String }) public title?: string;
    @Prop({ type: String }) public titleHint?: string;
    @Prop({ required: true, type: String }) public type?: string;
    @Prop({ type: Boolean }) public isError?: boolean;

    public hasUploaded = true;

    /**
     * 添加二维码
     */
    public onAddCode({ image, serverId }: { image: string, serverId: string }) {
        const imageInfo: ImageInfo = {
            key: serverId,
            url: image,
        };

        this.upload(imageInfo);

        // this.$emit('input', imageInfo);
        // this.hasUploaded = false;
    }
    /**
     * 删除二维码
     */
    public onRemoveCode() {
        this.$emit('input', null);
    }

    /**
     * 上传流程
     */
    public async upload(image: ImageInfo) {
        // if (this.hasUploaded) {
        //     return;
        // }
        const uploadRdata = await store.dispatch('uploadMedia', {
            mediaId: image.key,
            type: this.type,
        });
        if (uploadRdata.status !== 0) {
            return;
        }
        this.$emit('input', uploadRdata.data);
        this.hasUploaded = true;
    }

    public mounted() {
        if (this.value) {
            // @ts-ignore
            this.$refs.uploader.setImage(this.value.url);
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