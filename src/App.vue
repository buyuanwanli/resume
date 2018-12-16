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
      background: $background-color;
      margin-top: 30px;
      border-radius: 10px;
      overflow: hidden;
    }
  }

</style>
