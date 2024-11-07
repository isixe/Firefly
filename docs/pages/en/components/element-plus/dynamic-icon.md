<script setup>
const columns = [
  {
    title: 'parameter',
    dataIndex: 'parameter',
    key: 'parameter',
    width: '15%',
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
    width: '45%',
  },
  {
    title: 'type',
    dataIndex: 'type',
    key: 'type',
    width: '15%',
  },
  {
    title: 'default',
    dataIndex: 'default',
    key: 'default',
    width: '15%',
  },
  {
    title: 'require',
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
Before using dynamic icons, please make sure that your project has installed element plus icons.

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
<demo vue="dynamic-icon/element-plus/js/DynamicIcon.vue"
  :vueFiles="{
    'JS': "dynamic-icon/element-plus/js/DynamicIcon.vue",
    'TS': 'dynamic-icon/element-plus/ts/DynamicIcon.vue',
  }"
 title="Dynamic Icon Subcomponent"
/>

<demo vue="dynamic-icon/element-plus/js/index.vue"
  :vueFiles="{
    'JS': "dynamic-icon/element-plus/js/index.vue",
    'TS': "dynamic-icon/element-plus/ts/index.vue",
  }"
 title="Dynamic icon example"
 />

## API
<a-table :columns="columns" :data-source="data" :pagination='false'></a-table>