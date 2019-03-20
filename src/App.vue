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
  $background-color: #FAFAFA;
  $mian-color: #41B883;
  #app {
    display: flex;
    justify-content: center;
    font: 16px/1.5 STKaiti, "PingFang SC", SimSun, "Microsoft YaHei", SimHei, Helvetica, Arial;

    .wrapper {
      display: flex;
      justify-content: center;
      overflow: visible;

      Aside {
        width: 30%;
      }

      Main {
        padding-top: 20px;
        padding-right: 20px;
      }
    }
  }
</style>
