# element-virtual-table

## Set up
```
npm install element-virtual-table --save
```

## Describe

此组件基于element-ui^2.15.7版本，el-table源码开发, 实现了表格水平，竖直方向的

虚拟滚动，只会渲染可视区的表格内容，可以流畅支持10万级别的数据渲染，支持树形表格

虚拟渲染，数据越多由于2.0版本的Vue 内存占用较大，速度会慢下来

## Props

此组件扩展了3个props, 其他 props 与原 el-table 没有差异，老项目可以无痛使用，没有

开启virtual时，与原表格无差异，需要注意的是，只有设置了 height 或 maxHeight 属性时，

虚拟滚动才起作用

------------------------------------------------------------------------------

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|virtual|是否开启虚拟滚动，为true默认开启的行虚拟滚动|boolean|true/false|false
|virtualColumn|是否开启列虚拟滚动|boolean|true/false|false
|rowHeight|设置虚拟滚动得行高,默认值48，默认行是不自动撑开的，数据超出部分...toolTip提示|number|-|48

## How to use
```
// 1、如果全局引入了 element-ui^2.15.7 那么直接使用
import Vue from 'vue'
import VTable from './table'
Vue.use(VTable)

// 2、如果按需引入的 element-ui^2.15.7 那么需要引入 Table组件，不然样式会错误
import Vue from 'vue'
import { Table } from 'element-ui';
import VTable from './table'
Vue.use(VTable)

```
### Development
```
npm run serve
```

