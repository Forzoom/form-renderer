### 使用

`@forzoom/form-renderer`是表单生成的基础，通过向设置表单配置，其提供的`Renderer`组件能够将表单渲染出来。

具体的表单中的每一项，称为一个`Section`，因为Section的种类太过丰富，所以`@forzoom/form-renderer`本身不提供任何的`Section`，而是由一些其他的库来提供，这样可以做到按需使用。

以下是几个提供`Section`的库，目前只有移动端的样式：
`@forzoom/item-form`提供了一个看上去不那么紧凑的表单组件，单页能够容纳的信息较少。
`@forzoom/compact-form`提供了样式较为紧凑的表单组件。

### 例子

下面是一个简单的例子，其中的代码基本是使用`@forzoom/form-renderer`的固定模板。

```typescript
import { FormRendererComponent, Renderer } from '@forzoom/form-renderer';
import { FormPageMeta } from '@forzoom/form-renderer/types/form';
import { ItemFormSectionMeta } from '@forzoom/item-form/types/form';
import { Toast } from 'vant';

@Component({
    name: 'Page',
    components: {
        Renderer,
    },
    template: `
        <div>
            <Renderer :meta="meta" :form.sync="form" @error="onError" />
        </div>
    `,
})
class Page extends Vue {
    public form: any = {
        avatar: null,
    };

    public get meta(): Array<FormPageMeta<ItemFormSectionMeta>> {
        const sections: ItemFormSectionMeta[] = [
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

    public onError(msg: string) {
        Toast(msg);
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
                const createRdata = await store.dispatch('create', form);
            }
        }
    }
}
```

### 自定义组件

除了使用`@forzoom/item-form`和`@forzoom/compact-form`之外，还可以根据需要自定义`Section`。

### 问题

1. 使用SFC方式造成`Section`组件库文件过大
2. cascader的finish需要更加灵活
3. 依赖于van-popup
