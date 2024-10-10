<script setup>
import LoadPage from "@/views/page-0-Loading.vue";
import {onMounted, ref} from "vue";
import router from "@/router/index.js";

const loadPageRef = ref(null);

const check_loading = () => {
  let timer = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(timer);
      loadPageRef.value.loading_out();
    }
  }, 300)
}

onMounted(() => {
  check_loading();
  router.beforeEach((to, from, next) => {
    loadPageRef.value.loading_in(next);
  })
})

defineExpose({
  check_loading
})

</script>

<template>
  <LoadPage ref="loadPageRef" @check_loading="check_loading"/>
  <div class="page-container">
    <router-view/>
  </div>
</template>

<style scoped>
.page-container {
  width: 100%;
  height: 100vh;
}


</style>
