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
    description: 'Ant Design 的图标名称',
    type: 'string',
    default: 'undefined',
    require: '是',
  },
  {
    key: 'color',
    parameter: 'color',
    description: '图标颜色',
    type: 'string',
    default: 'undefined',
    require: '否',
  },
  {
    key: 'fontSize',
    parameter: 'fontSize',
    description: '图标字体大小',
    type: 'string',
    default: 'undefined',
    require: '否',
  },
];
</script>

## 前提准备
在使用动态图标之前，请先确保你的项目安装了 ant design icons
::: code-group

```sh [npm]
# vue
$ npm i --save @ant-design/icons-vue

# react
$ npm install @ant-design/icons --save
```

```sh [yarn]
# vue
$ yarn i @ant-design/icons-vue

# react
$ yarn i @ant-design/icons
```

```sh [pnpm]
# vue
$ pnpm i @ant-design/icons-vue

# react
$ pnpm install @ant-design/icons
```
:::

## 动态图标

<demo vue="dynamic-icon/antdv/DynamicIcon.vue" react="dynamic-icon/antdv/DynamicIcon.tsx"
 title="动态图标子组件"
/>

<demo vue="dynamic-icon/antdv/index.vue" react="dynamic-icon/antdv/index.tsx"
 title="动态图标示例"
  description="你可以使用 icon、color 和 fontSize 来指定动态图标的图标名、颜色和字体大小"
/>

## API
<a-table :columns="columns" :data-source="data" :pagination='false'></a-table>