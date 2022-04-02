import VTable from './src/table';

/* istanbul ignore next */
VTable.install = function(Vue) {
  Vue.component(VTable.name, VTable);
};

export default VTable;
