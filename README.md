### 问题

1. 删除vue-property-decorator的引入
2. 删除@forzoom/uploader的引入
3. Cascader的fetchList和listMap和itemMap不相符的问题

cascader的finish需要更加灵活
依赖于van-popup

### example

```typescript
@Component
class Page extends Vue {
    public get meta(): FormPageMeta[] {
        const sections: FormSectionMeta[] = [
            {
                type: 'ItemUploader',
                key: 'avatar',
                titleComponent: false,
                props: {
                    title: '头像',
                    httpRequest: async (image) => {
                        const rdata = await store.dispatch('upload', {
                            mediaId: image.key,
                            type: 'avatar',
                        });
                        return rdata.data;
                    },
                },
                validates: [
                    { trigger: 'validate', required: true, message: '请上传头像' },
                ],
            },
        ];
        const pages: FormPageMeta[] = [
            {
                sections,
            },
        ];
        return pages;
    }

    /**
     * 点击提交
     */
    public async onClickSubmit() {
        const vm = this;
        // @ts-ignore
        const $renderer = vm.$refs.form as FormRendererComponent;

        if (!$renderer.isLastPage()) {
            $renderer.nextPage();
        } else {
            if ($renderer.validate()) {
                // 创建
                const createRdata = await store.dispatch('create', {
                    activityId: this.activityId,
                });
            }
        }
    }
}
```
