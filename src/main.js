import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import {Table, Button, TableColumn, Input } from 'element-ui';
import VTable from './table'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(Table)
Vue.use(Input)

Vue.use(VTable)


new Vue({
  render: h => h(App),
}).$mount('#app')
