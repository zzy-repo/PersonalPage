<script setup>

import NextPageArrow from "@components/nextPageArrow.vue";
import Navbar from "@components/navbar.vue";
import Background from "@components/background.vue";
</script>

<template>
  <background/>
  <navbar/>
  <div class="container">
    <div class="box">
      <main class="main">
        <h1>关于我</h1><br>
        <p>
          <span style="--i:1">
          学历: <span class="tag">杭州电子科技大学</span><span class="tag">卓越学院</span><span class="tag">计算机科学与技术</span><br>
          奖状证书:<span class="tag"> <strong>校一等奖学金</strong></span><span class="tag"><strong>校优秀学生干部</strong></span><span class="tag">云真信杯数模比赛一等奖</span><span class="tag">院辩论赛冠军</span><br>
          英语水平:<span class="tag">CET-4 512 分</span>, <strong>顺畅的浏览英文技术文档</strong>, 并经常使用英文做笔记 <br>
          </span>
          <br>
          <span style="--i:2">
          现在正专注于<strong>前端开发</strong>技术的领域，热爱并致力于这一行业，因为编程过程中的所见即所得，这激发了持续学习和成长的动力。我期望能够在这一领域深耕，不断产出有价值的内容，为技术发展贡献力量。
          </span>
          <br><br>
          <span style="--i:3">
          在校期间，已经学习了 <strong>计算机网络、计算机组成原理、数据结构、编译原理等 </strong>计算机科学基础知识。
          此外，通过自学掌握了前端技术如<strong> HTML、CSS、JavaScript、Vue.js、Vue Router、Vuex、Element Plus </strong>，
          为了增强我对于软件开发领域的理解,学习了一些后端技术包括<strong> SpringBoot、Mybatis-plus、Go 语言、Gin 框架、Gorm、MySQL、Redis</strong>。
          同时也经常使用<strong> Git、Docker、Linux </strong>等工具和开发环境提高开发效率
          我正在不断的学习, 计划的输出高质量的内容和项目，希望为技术社区做出一份贡献。 <br>
          </span>
          <br>
          <span style="--i:4">
          编程之于, 我喜欢欣赏艺术, 喜欢看电影, 喜欢听 rnb, 摇滚或者是古典音乐 , 喜欢一些关于哲学心理或者是东方哲学的著作相关著作,
          这可以让我学到很多东西 <br>
          现居住在杭州, 如果想要了解我, 可以联系我,详情在 <router-link to="/page-6" style="color: #333333;font-weight: bold">contact</router-link> 页面 <br>
          十分乐于交友，因为这样能够遇见不同背景的人,开阔自己的视野<br>
          </span>
        </p>
      </main>

    </div>

  </div>


  <next-page-arrow/>
</template>

<style scoped lang="scss">

.tag{
  border: #777777 1px solid;
  border-radius: 15px;
  padding: 0 7px;
  display: inline-block;
  cursor: default;
  margin: 1px 5px;

  transition: transform .3s ease-in-out;
  &:hover{
    transform: translateX(-2px) translateY(-2px);
  }
}

.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 220px 30px;
}

.main {
  max-width: 800px;
  display: flex;
  flex: 1;
  gap: var(--gap);

  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 30px;
    color: #333;
    opacity: 0;
    animation: text-shadow-drop-br 0.6s both, change-opacity 3s both;
  }

  p {
    font-size: 18px;
    color: #555;
    line-height: 1.8;

    span {
      animation: change-opacity 3s both;
      opacity: 0;
      animation-delay: calc(var(--i) * .3s);
    }
  }
}

@keyframes text-shadow-drop-br {
  0% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    text-shadow: 6px 6px 18px rgba(0, 0, 0, 0.1);
  }
}

@keyframes change-opacity {
  to {
    opacity: 1;
  }
}

</style>