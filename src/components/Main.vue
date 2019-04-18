<template>
  <main>
    <div class="paper">
      <h1>INFORMATION ANG PROJECT</h1>

      <section class="blogs">
        <h2>个人博客</h2>
        <ul>
          <li>
            <span class="highlight">GitHub:</span><a href="https://github.com/buyuanlee" target="_blank"><span>https://github.com/buyuanlee</span></a>
          </li>
          <li><span class="highlight">简书:</span><a href="https://www.jianshu.com/u/5362a3ed6b43" target="_blank"><span>https://www.jianshu.com/u/5362a3ed6b43</span></a>
          </li>
          <li><span class="highlight">GitHub:</span><a href="https://juejin.im/user/5b9d2782e51d450e4006a485"
                                                       target="_blank"><span>https://juejin.im/user/5b9d2782e51d450e4006a485</span></a>
          </li>
        </ul>
      </section>

      <section class="skills">
        <h2>技能树</h2>
        <ul>
          <li>- 熟练掌握<span class="highlight">HTML5</span>,使用语义化HTML;熟练掌握<span class="highlight">CSS3</span>,制作常用动画特效;熟练运用<span
            class="highlight">JavaScript</span>,熟悉ES6常用属性
          </li>
          <li>- 使用<span class="highlight">Vue</span>技术栈;了解<span class="highlight">Vuex</span>、<span class="highlight">Vue-Router</span>、组件、双向绑定、父子通信等
          </li>
          <li>- 熟悉<span class="highlight">jQuery</span>常用API;可以利用jQuery制作轮播、Tab组件等</li>
          <li>- 了解项目工程化，会<span class="highlight">webpack</span>的简单配置使用;使用过<span class="highlight">parcel</span>对项目打包
          </li>
          <li>- 了解<span class="highlight">小程序</span>代码构成和部分API，写过一个简单的小程序</li>
          <li>- 使用<span class="highlight">SCSS</span>对项目进行样式设置</li>
        </ul>
      </section>
      <section class="project">
        <!--作品一-->
        <h2>个人作品</h2>
        <div class="project-box">
          <h3>Aloe UI 轮子组件</h3>
          <img src="../assets/p4.png" alt="Aloe UI 轮子组件">
          <b class="highlight">项目介绍:</b>参考 <span class="highlight">Element</span>手写了一个基于 <span
          class="highlight">Vue.js</span>简单的UI组件库，并在 <span class="highlight">npm</span>社区发布了包，进一步了解了开源文化，项目使用 <span
          class="highlight">Vue-Cli</span>搭建，官方文档使用了 <span class="highlight">VuePress</span>框架。现有组件包括Button、Icon、ButtonGroup、Input、Layout,其余组件仍在更新中，项目使用
          <span class="highlight">scss</span>编辑样式
          <a href="https://buyuanlee.github.io/AloeUI/index.html" target="_blank" class="highlight">项目预览>>></a>
          <a href="https://github.com/buyuanlee/AloeUI" target="_blank" class="highlight">源码查看>>></a>
        </div>
        <!--作品六-->
        <div class="project-box">
          <h3>个人主页</h3>
          <img src="../assets/p2.png" alt="一只佩琦的诞生">
          <b class="highlight">项目介绍:</b>利用 <span class="highlight">CSS3</span>原生 <span
          class="highlight">JavaScript</span>完成页面的个人主页;用以展示个人作品，并且有留言功能；用到的第三方库有<span class="highlight">Swiper、Tween</span>；数据库用的是<span class="highlight">LeanCloud</span>
          <a href="https://buyuanlee.github.io/cv/index.html" target="_blank" class="highlight">项目预览>>></a>
          <a href="https://github.com/buyuanlee/cv" target="_blank" class="highlight">源码查看>>></a>
        </div>
        <!--作品五-->
        <div class="project-box">
          <h3>AloeTranslation</h3>
          <img src="../assets/p6.png" alt="AloeTranslation">
          <b class="highlight">项目介绍:</b>主要为了了解<span class="highlight">微信小程序</span>的基础用法以及发布流程,配合百度翻译的API做的一款简易的<span
          class="highlight">翻译小程序</span>。并且支持查看最近翻译历史。
          <a href="" target="_blank" class="highlight">项目预览>>></a>
          <img src="../assets/qrcode.png" alt="" class="qrcode">
          <a href="https://github.com/buyuanlee/AloeTranslation" target="_blank" class="highlight">源码查看>>></a>
        </div>
        <!--作品二-->
        <div class="project-box">
          <h3>社区论坛重构</h3>
          <img src="../assets/p3.png" alt="社区论坛重构">
          <b class="highlight">项目介绍:</b>利用 <span class="highlight">VueJS</span>及相关技术栈，利用CNode官方API，仿写了一个CNode社区。项目使用
          <span class="highlight">Vue-Cli</span>进行项目搭建，使用 <span class="highlight">component</span>的功能，将页面分为头部、列表、文章内容、侧边栏、用户信息和分页器等组件。使用<span class="highlight">Vue-Router</span>对项目进行路由管理,使用 <span
          class="highlight">webpack</span>打包
          <a href="https://buyuanlee.github.io/cnode-demo/dist/#/" target="_blank" class="highlight">项目预览>>></a>
          <a href="https://github.com/buyuanlee/cnode-demo" target="_blank" class="highlight">源码查看>>></a>
        </div>
        <!--作品四-->
        <div class="project-box">
          <h3>炫酷动效简历</h3>
          <img src="../assets/p1.png" alt="炫酷动效简历">
          <b class="highlight">项目介绍:</b>主要利用<span class="highlight">CSS3</span>和原生 <span
          class="highlight">JavaScript</span>实现一个展现实时样式代码的简历动画，并且支持<span class="highlight">markdown</span>
          语法;用到的第三方库有<span class="highlight">prism</span>和 <span class="highlight">marked</span>；通过此项目加深了对CSS3和JS相关API的了解，学习如何合理利用第三方库实现想要的效果
          <a href="https://buyuanlee.github.io/AnimationResume/index.html" target="_blank" class="highlight">项目预览>>></a>
          <a href="https://github.com/buyuanlee/AnimationResume" target="_blank" class="highlight">源码查看>>></a>
        </div>
        <!--作品三-->
        <div class="project-box">
          <h3>随手记（canvas）</h3>
          <img src="../assets/p5.png" alt="随手记（canvas）" class="phone">
          <b class="highlight">项目介绍：</b>利用<span class="highlight">HTML5</span>的<span class="highlight">canvas</span>API,配合原生的
          <span class="highlight">JavaScript</span>制作的一个简易画板工具。主要功能是可以在画板上写字、涂鸦。其他功能包括切换画笔颜色、调整画笔粗细、橡皮擦功能、清除全部功能以图片及保存到本地。
          <a href="https://buyuanlee.github.io//canvas/index.html" target="_blank" class="highlight">项目预览>>></a>
          <a href="https://github.com/buyuanlee/canvas" target="_blank" class="highlight">源码查看>>></a>
        </div>
      </section>
      <section class="about">
        <h2>关于我</h2>
        <p>兴趣驱动，学习能力强，自我管理能力强，渴望在前端领域更好的发展，享受coding</p>
      </section>
      <section class="exp">
        <h2>职业经历</h2>
        <ul>
          <li>
            <span class="highlight">2014-2015:</span><span>上海欧雅环保科技有限公司-京东店长</span>
          </li>
          <li><span class="highlight">2016-2018:</span><span>杭州网维科技有限公司-运营</span>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
  export default {
    name: "Main"
  }
</script>

<style scoped lang="scss">
  @import "../assets/reset";

  $color: #358c64;
  $box-shadow: 2px 2px 8px 3px rgba(0, 0, 0, 0.2);
  main {
    display: flex;
    color: #666;

    h1 {color: #999;}

    h2 {color: $color;}

    section {border-bottom: 1px solid #999;}

    .highlight {color: orangered;font-weight: bolder;font-size: 18px;}

    .paper {background-color: rgba(255, 255, 255, 0.33);margin: 10px 0 0 10px;

      .about {}

      .skills {
        ul {
          li {margin-top: 5px;}
        }
      }

      .project {
        .project-box {border: 1px solid #999;box-shadow: $box-shadow;padding: 10px;margin: 10px 10px 10px 0;

          img {display: block;width: 640px;height: 360px;}

          a {display: block;text-decoration: underline;}

          .qrcode {width: 10%;height: 10%}
          .phone{
            display: block;width:190px;height: 360px;
          }
        }


      }
    }
  }
</style>
