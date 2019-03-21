<template>
  <div id="app">
    <div class="wrapper">
      <Aside></Aside>
      <div class="line"></div>
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

      .line{
        height: 100%;
        width: 2px;
        background-color: #999;
        margin-left: 10px;
      }
      Aside {
        width: 25%;
      }
      Main {
        width: 50%;
        padding-top: 20px;
      }
    }
  }
</style>
