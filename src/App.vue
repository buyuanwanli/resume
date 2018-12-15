<template>
  <div id="app">
    <div class="wrapper">
      <Aside></Aside>
      <Main></Main>
    </div>
  </div>
</template>

<script>
  import Main from './components/Main'
  import Aside from './components/Aside'

  export default {
    name: 'App',
    components: {
      Main, Aside
    }
  }
</script>

<style scoped lang="scss">
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    font: 16px/1.5 "PingFang SC", SimSun, STKaiti, "Microsoft YaHei", SimHei, Helvetica, Arial;
  }

  .wrapper {
    width: 75%;
    background: #999;
  }
</style>
