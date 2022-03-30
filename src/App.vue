<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 滚动条样式 */
  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }

  /* 轨道样式 */
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* 滑块样式 */
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-clip: padding-box;
    background-color: #ccd4d9;
    border: 5px solid rgba(255,255,255,0);
  }

  /* 滑块hover样式 */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #bac1c6;
    border-width: 4px
  }
</style>
