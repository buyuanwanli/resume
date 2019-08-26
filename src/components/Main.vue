<template>
  <main>
    <div class="paper">
      <h1>INFORMATION ANG PROJECT</h1>
      <section class="about">
        <h2>关于我</h2>
        <p>兴趣驱动，学习能力强，自我管理能力强，渴望在前端领域更好的发展，享受coding</p>
      </section>
      <section class="blogs">
        <h2>Blog/GitHub</h2>
        <ul>
          <li>
            <span class="highlight">GitHub:</span><a href="https://github.com/buyuanlee" target="_blank"><span>https://github.com/buyuanlee</span></a>
          </li>
          <li><span class="highlight">简书:</span><a href="https://www.jianshu.com/u/5362a3ed6b43" target="_blank"><span>https://www.jianshu.com/u/5362a3ed6b43</span></a>
          </li>
          <li><span class="highlight">掘金:</span><a href="https://juejin.im/user/5b9d2782e51d450e4006a485"
                                                       target="_blank"><span>https://juejin.im/user/5b9d2782e51d450e4006a485</span></a>
          </li>
        </ul>
      </section>
      <section class="skills">
        <h2>技能树</h2>
        <ul>
          <li>- 精通 <span class="highlight">css3、html5、JavaScript</span> 基本前端语法</li>
          <li>- 熟悉<span class="highlight">es6</span>常用语法/可以使用<span class="highlight">SASS</span>开发</li>
          <li>- 熟悉vue全家桶及其使用，可以利用<span class="highlight">Vue</span>全家桶+<span class="highlight">ElementUI</span>进行快速开发</li>
          <li>- 熟悉<span class="highlight">小程序</span>开发流程，有小程序的开发经验</li>
          <li>- 熟悉<span class="highlight">H5页面</span>的开发，使用过微信的常用接口</li>
        </ul>
      </section>
      <section class="exp">
        <h2>职业经历</h2>
        <ul>
          <li><span class="highlight">2018.8-2019.8:</span><span>杭州去打球文化创意有限公司-web前端</span>
          <li><span class="highlight">工作内容:</span><br><span>1.商家后台管理系统的搭建与维护 <br> 2.小程序项目维护 <br> 3.微信H5页面</span>
          </li>
        </ul>
      </section>
      <section class="project">
        <h2>项目及作品</h2>
        <!--作品-->
        <div class="project-box">
          <h3>SAAS商家管理后台（线上项目）</h3>
          <img src="../assets/saas.png" alt="商家管理后台">
          <b class="highlight">项目介绍:</b>此项目是给入驻平台商家使用的后台管理系统，主要功能有店铺数据查看、店铺基本信息修改、人员管理、顾客管理、店铺装修、优惠券管理、作品管理。
          项目使用 <span class="highlight">Vue-Cli3搭建</span>，组件使用 <span
          class="highlight">ElementUI</span>进行快速开发;使用<span class="highlight">Vue-Router</span>进行路由管理，<span class="highlight">Vuex</span>进行状态管理；
          用到的第三方库有<span class="highlight">V-chart、Baidu-map</span>；请求使用<span class="highlight">Axios+QS</span>；样式使用<span class="highlight">SASS</span>
          <a href="https://www.wenleapp.com/businessBack" target="_blank" class="highlight">项目线上地址>>></a>
        </div>
    <!--作品一-->
        <div class="project-box">
          <h3>Aloe UI 轮子组件（个人项目）</h3>
          <img src="../assets/ui.png" alt="Aloe UI 轮子组件">
          <b class="highlight">项目介绍:</b>参考 <span class="highlight">Element</span>手写了一个基于 <span
          class="highlight">Vue.js</span>简单的UI开源组件库，并可以使用 <span class="highlight">npm</span>下载包，项目使用 <span
          class="highlight">Vue-Cli</span>搭建，官方文档使用了 <span class="highlight">VuePress</span>框架。现有组件包括Button、Icon、ButtonGroup、Input、Layout,其余组件仍在更新中
          <a href="https://buyuanlee.github.io/AloeUI/index.html" target="_blank" class="highlight">项目预览>>></a>
          <a href="https://github.com/buyuanlee/AloeUI" target="_blank" class="highlight">源码查看>>></a>
        </div>
        <!--作品五-->
        <div class="project-box">
          <h3>AloeTranslation（小程序项目）</h3>
          <img src="../assets/wx.png" alt="AloeTranslation">
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
    </div>
  </main>
</template>

<script>
export default { name: 'Main' }
</script>
<style scoped lang="scss">
  @import "../assets/reset";

  $color: #589bf7;
  $box-shadow: 2px 2px 8px 3px rgba(0, 0, 0, 0.2);
  main {display: flex;color: #666;letter-spacing: 1px;margin-bottom: 24px;
    h1 {color: #999;}
    h2 {color: $color;}
    section {border-bottom: 1px solid #999;margin-bottom: 12px}
    .highlight {color: #589bf7;font-weight: bolder;font-size: 18px;}
    .paper {background-color: rgba(255, 255, 255, 0.33);margin: 10px 0 0 10px;
      .about {}

      .skills {
        ul {
          li {margin-top: 5px;}
        }
      }

      .project {
        .project-box {border: 1px solid #999;box-shadow: $box-shadow;padding: 10px;margin: 10px 10px 32px 0;
          img {display: block;width: 640px;height: 360px;}
          a {display: block;text-decoration: underline;}
          .qrcode {width: 30%;height: 30%}
          .phone{
            display: block;width:190px;height: 360px;
          }
        }
      }
    }
  }
</style>
