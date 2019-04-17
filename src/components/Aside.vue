<template>
  <aside>
    <section class="user">
      <img src="../assets/avatar.jpg" alt="avatar" class="avatar">
      <h1>李不远</h1>
      <p>前端工程师</p>
    </section>
    <section class="user-info">
      <h3>基本信息</h3>
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-address"></use>
          </svg>
          <span>杭州市</span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-education"></use>
          </svg>
          <span>大学本科</span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-school"></use>
          </svg>
          <span>安徽大学江淮学院</span>
        </li>
      </ul>
    </section>
    <section class="skill">
      <h3>专业技能</h3>
      <dl>
        <dt>HTML5 / CSS3 / JavaScript</dt>
        <dd><span style="width: 90%"></span></dd>

        <dt>Vue / Vue-Router / Vuex</dt>
        <dd><span style="width: 85%"></span></dd>

        <dt>ES6 / Scss</dt>
        <dd><span style="width: 85%"></span></dd>

        <dt>NodeJs</dt>
        <dd><span style="width: 75%"></span></dd>

      </dl>
    </section>
    <section class="blog">
      <h3>个人博客</h3>
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-jianshu"></use>
          </svg>
          <a href="https://www.jianshu.com/u/5362a3ed6b43" target="_blank">简书</a>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-juejin"></use>
          </svg>
          <a href="https://juejin.im/user/5b9d2782e51d450e4006a485" target="_blank">掘金</a>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-github"></use>
          </svg>
          <a href="https://www.github.com/buyuanlee" target="_blank">GitHub</a>
        </li>
      </ul>
    </section>
    <section class="contact">
      <h3>联系方式</h3>
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-wechat"></use>
          </svg>
          <span>ecjean</span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-phone"></use>
          </svg>
          <span>17557290656</span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-email"></use>
          </svg>
          <span>152927520@qq.com</span>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
  export default {
    name: "Aside"
  }
</script>

<style scoped lang="scss">
  @import "../assets/reset";

  $color: #41B883;
  $background-color: #EEE;
  $box-shadow: 3px 3px 10px 4px rgba(0, 0, 0, 0.5);

  aside {
    .user {
      text-align: center;color: #FFF;
      background-color: $color;
      padding-bottom: 20px;
      .avatar {width: 50%;
      border-radius: 50%}
    }

    .user-info {
      color: $color;
      background-color: $background-color;
      transition: linear .5s;
      text-align: center;padding: 20px 0;
      ul{
        display: inline-block;
      }

      &:hover {
        transform: scale(1.1);padding-left: 20px;
        background-color: $background-color;
        box-shadow: $box-shadow;}

      ul {

        li {
          color: $color;padding: 10px;
        }
      }
    }

    .skill {background-color: $color;
      color: $background-color;
      text-align: center;transition: linear .5s;
      padding: 20px;

      &:hover {transform: scale(1.1);padding-left: 20px;
        background-color: $color*1.1;
        box-shadow: $box-shadow;
      }


      dl {
        dt {margin: 10px;}
        dd {
          display: block;width: 90%;
          height: 4px;background: $background-color*0.8;
          border-radius: 4px;margin: 0 auto;
          span {
            display: block;height: 4px;
            border-radius: 4px;
            background: $background-color;
          }
        }
      }
    }

    .blog {color: $color;text-align: center;
      transition: linear .5s;padding: 20px 0;
      background-color: $background-color;



      ul {

        li {color: $color;padding: 10px;

          a {color: inherit}

          &:hover {text-decoration: underline;}
        }
      }
    }

    .contact {background-color: $color;
      color: $background-color;
      transition: linear .5s;
      text-align: center;padding: 20px 0;

      &:hover {transform: scale(1.1);padding-left: 20px;
        background-color: $color*1.1;box-shadow: $box-shadow;}

      ul {

        li {padding: 10px;

        }
      }
    }
  }
</style>
