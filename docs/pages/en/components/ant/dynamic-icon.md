
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
    type: 'string',
    default: 'undefined',
    require: 'true',
  },
    {
    key: 'color',
    parameter: 'color',
    description: 'Icon color',
    type: 'string',
    default: 'undefined',
    require: 'false',
  },
    {
    key: 'fontSize',
    parameter: 'fontSize',
    description: 'Icon font size',
    type: 'string',
    default: 'undefined',
    require: 'false',
  },
];
</script>

## Preparation
Before using dynamic icons, please make sure that your project has installed ant design icons.
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

## Dynamic Icon

<demo vue="dynamic-icon/antdv/DynamicIcon.vue" react="dynamic-icon/antdv/DynamicIcon.tsx"
 title="Dynamic Icon Subcomponent"
/>

<demo vue="dynamic-icon/antdv/index.vue" react="dynamic-icon/antdv/index.tsx"
 title="Dynamic icon example"
  description="You can use icon, color, and fontSize to specify the name, color, and font size of a dynamic icon."
/>

## API
<a-table :columns="columns" :data-source="data" :pagination='false'></a-table>