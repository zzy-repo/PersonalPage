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
        <h1>关于网站</h1><br>
        <p>
          <span style="--i:1">
              该网站基于vue框架，运用了<b>Grid</b>和<b>Flex</b>布局实现响应式设计，确保在不同设备上均能提供良好的浏览体验。<br>
              为了增强交互效果，网站采用了平滑的界面跳转动画，并利用<b>Canvas</b>引入动态背景.<br>
              此外，通过实现动画懒加载技术，让网站在动效上进一步优化。<br>
          </span>
          <span style="--i:2">
              在样式管理方面，采用<b>SCSS</b>进行全局配置，确保了网站的视觉效果统一而专业。<br>
              同时，网站还融入了<b>3D悬浮卡片</b>等创新元素，带来了更加丰富和动态的视觉体验。<br>
          </span>
          <span style="--i:3">
              为了深入掌握前端开发的核心技能，网站在开发过程中避免了对<b>Element-Plus</b>等组件库的依赖，而是选择使用原生的CSS和JavaScript技术来构建界面。<br>
              这种方法不仅提升了开发过程中对前端技术栈的深入理解，也使得网站在实现各种视觉效果时更加灵活和高效。
          </span>
          <br>
          <span style="--i:4"><br>
              现在网站的源码正在重构和解耦,将来我会将网站开源在GitHub上面,如果你感兴趣,可以点个star
          </span>
        </p>
      </main>

    </div>

  </div>


  <next-page-arrow/>
</template>

<style scoped lang="scss">

.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 220px 80px;
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
    color: #666;
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