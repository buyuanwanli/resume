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
  $background-color: #EEE;
  #app {
    display: flex;
    justify-content: center;
    font: 16px/1.5 STKaiti, "PingFang SC", SimSun, "Microsoft YaHei", SimHei, Helvetica, Arial;

    .wrapper {
      display: flex;
      justify-content: center;
      width: 75%;
      background: linear-gradient(90deg, rgba(65, 184, 131, 0.8), rgba(50, 57, 86, 0.8));
      margin-top: 30px;
      border-radius: 10px;
      overflow: hidden;
    }
  }

</style>
