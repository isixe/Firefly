<script setup>
const columns = [
  {
    title: '参数',
    dataIndex: 'parameter',
    key: 'parameter',
    width: '15%',
  },
  {
    title: '说明',
    dataIndex: 'description',
    key: 'description',
    width: '45%',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    width: '15%',
  },
  {
    title: '默认',
    dataIndex: 'default',
    key: 'default',
    width: '15%',
  },
  {
    title: '是否必须',
    dataIndex: 'require',
    key: 'require',
    width: '15%',
  },
];

const data = [
  {
    key: 'parameter',
    parameter: 'icon',
    description: 'Icon name in Ant Design',
    type: 'String',
    default: 'undefined',
    require: 'true',
  },
    {
    key: 'color',
    parameter: 'color',
    description: 'Icon color',
    type: 'String',
    default: 'currentColor',
    require: 'false',
  },
  {
    key: 'width',
    parameter: 'width',
    description: 'Icon width',
    type: 'String',
    default: 'undefined',
    require: 'false',
  },
  {
    key: 'height',
    parameter: 'height',
    description: 'Icon height',
    type: 'String',
    default: 'undefined',
    require: 'false',
  },
];
</script>

## Preparation
在使用动态图标之前，请先确保你的项目安装了 element-plus icons

::: code-group
```sh [npm]
$ npm install @element-plus/icons-vue
```

```sh [yarn]
$ yarn add @element-plus/icons-vue
```

```sh [pnpm]
$ pnpm install @element-plus/icons-vue
```
:::

## Dynamic Icon
<demo vue="dynamic-icon/element-plus/DynamicIcon.vue"
 title="Dynamic Icon Subcomponent"
/>

<demo vue="dynamic-icon/element-plus/index.vue"
 title="Dynamic icon example"
 />

## API
<a-table :columns="columns" :data-source="data" :pagination='false'></a-table>