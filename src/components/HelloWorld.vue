<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <div>
      <v-table virtual virtualColumn lazy :tree-props="{children: 'children', hasChildren: 'hasChildren'}" row-key="id" :data="tableData" border max-height="500" style="width: 100%">
        <el-table-column
          fixed="left"
          prop="date"
          label="日期"
          :width="180">
        </el-table-column>
        <el-table-column
          fixed="left"
          prop="name"
          label="姓名"
          :width="180">
        </el-table-column>
        <el-table-column
          :width="240"
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column v-for="item in 10" :key="item"
          :width="180"
          :prop="`name${item}`"
          :label="`明朝的法律时代的${item}`">
        </el-table-column>
        <el-table-column
          :width="140"
          fixed="right"
          prop="actions"
          label="操作">
          <el-button type="text" style="padding: 0;">查看</el-button>
        </el-table-column>
      </v-table>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import ElTable from './table/index'
// Vue.use(ElTable)
const tableData = []
    for(let i = 0; i < 300; i++) {
      tableData.push({
        id:'id' + i,
        date: '2016-05-02',
        name: '王小虎' + i,
        address: '上海市普陀区金沙江路 1518 弄 ' + i,
        name0:Math.floor(Math.random() * 10000) + 'xxxx了士大夫士大夫士大夫士大夫士大夫',
        name1:Math.floor(Math.random() * 10000) + 'xxxx',
        name2:Math.floor(Math.random() * 10000) + 'xxxx了士大夫士大夫士大夫士大夫士大夫',
        name3:Math.floor(Math.random() * 10000) + 'xxxx',
        name4:Math.floor(Math.random() * 10000) + 'xxxx',
        name5:Math.floor(Math.random() * 10000) + 'xxxx',
        name6:Math.floor(Math.random() * 10000) + 'xxxx',
        name7:Math.floor(Math.random() * 10000) + 'xxxx',
        name8:Math.floor(Math.random() * 10000) + 'xxxx',
        name9:Math.floor(Math.random() * 10000) + 'xxxx了士大夫士大夫士大夫士大夫士大夫',
        name10:Math.floor(Math.random() * 10000) + 'xxxx',
        name11:Math.floor(Math.random() * 10000) + 'xxxx',
        name12:Math.floor(Math.random() * 10000) + 'xxxx',
        name13:Math.floor(Math.random() * 10000) + 'xxxx',
        name14:Math.floor(Math.random() * 10000) + 'xxxx',
        name15: Math.floor(Math.random() * 10000) + 'xxxx',
        name16: Math.floor(Math.random() * 10000) + 'xxxx',
        name17: Math.floor(Math.random() * 10000) + 'xxxx',
        name18: Math.floor(Math.random() * 10000) + 'xxxx',
        name19: Math.floor(Math.random() * 10000) + 'xxxx',
        name20: Math.floor(Math.random() * 10000) + 'xxxx',
        name21: Math.floor(Math.random() * 10000) + 'xxxx',
        name22: Math.floor(Math.random() * 10000) + 'xxxx',
        name23: Math.floor(Math.random() * 10000) + 'xxxx',
        name24: Math.floor(Math.random() * 10000) + 'xxxx',
        name25: Math.floor(Math.random() * 10000) + 'xxxx',
        name26: Math.floor(Math.random() * 10000) + 'xxxx',
        children:[
          {
            id:'idi' + i,
            date: '2016-05-02',
            name: '王小虎i' + i,
            address: '上海市普陀区金沙江路 1518 弄i ' + i,
            name1:Math.floor(Math.random() * 10000) + 'xxxx了士大夫士大夫士大夫士大夫士大夫',
            name2:Math.floor(Math.random() * 10000) + 'xxxx',
            name3:Math.floor(Math.random() * 10000) + 'xxxx',
            name4:Math.floor(Math.random() * 10000) + 'xxxx',
            name5:Math.floor(Math.random() * 10000) + 'xxxx',
          },
          {
            id:'idd' + i,
            date: '2016-05-02',
            name: '王小虎d' + i,
            address: '上海市普陀区金沙江路 1518 弄d ' + i,
            name1:Math.floor(Math.random() * 10000) + 'xxxx了士大夫士大夫士大夫士大夫士大夫',
            name2:Math.floor(Math.random() * 10000) + 'xxxx',
            name3:Math.floor(Math.random() * 10000) + 'xxxx',
            name4:Math.floor(Math.random() * 10000) + 'xxxx',
            name5:Math.floor(Math.random() * 10000) + 'xxxx',
          },
          {
            id:'idc' + i,
            date: '2016-05-02',
            name: '王小虎c' + i,
            address: '上海市普陀区金沙江路 1518 弄c ' + i,
            name1:Math.floor(Math.random() * 10000) + 'xxxx了士大夫士大夫士大夫士大夫士大夫',
            name2:Math.floor(Math.random() * 10000) + 'xxxx',
            name3:Math.floor(Math.random() * 10000) + 'xxxx',
            name4:Math.floor(Math.random() * 10000) + 'xxxx',
            name5:Math.floor(Math.random() * 10000) + 'xxxx',
          }
        ]
      })
    }
export default {
  name: 'HelloWorld',
  // components:{ ElTable },
  props: {
    msg: String
  },
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.tableData = tableData
    }, 500);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
