<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const pages = ['/page-1', '/page-2', '/page-3', '/page-4', '/page-5', '/page-6', '/page-7'];
const router = useRouter();

// 获取当前路由的索引
function getCurrentPageIndex() {
  return pages.indexOf(router.currentRoute.value.path);
}

function goToNextPage() {
  // 获取当前路由的索引
  const currentPageIndex = getCurrentPageIndex();
  // 计算下一个路由的索引
  const nextPageIndex = (currentPageIndex + 1) % pages.length;
  // 跳转到下一个路由
  router.push(pages[nextPageIndex]).then(() => {
    // 这里不需要更新currentPageIndex，因为路由已经改变
  }).catch((error) => {
    console.error(`Error navigating to page ${pages[nextPageIndex]}: ${error}`);
  });
}
</script>

<template>
  <div class="arrowToNextPage-container">
    <i class="fa fa-sort-desc fa-3x arrowToNextPage" aria-hidden="true" v-on:click="goToNextPage"/>
  </div>
</template>

<style scoped lang="scss">
.arrowToNextPage-container {
  position: fixed;
  bottom: 40px;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 60px;
  transition: transform 0.5s ease;
  &:hover{
    transform: scale(1.5);
  }
  &:active{
    transform: scale(1.3);
  }
  .arrowToNextPage{
    color: #777777;
    animation: bounce 2s infinite;
    &:hover{
      animation-play-state: paused;
    }
  }
}


@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

</style>