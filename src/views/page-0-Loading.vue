<script setup>
import {ref} from 'vue';
import LoadingCat from "@components/loading-cat.vue";

const loader = ref(null);
const emit = defineEmits(['check_loading']);

const loading_out = () => {
  if (loader.value) {
    loader.value.classList.add('loading_out');
  }
}

const loading_in = (next) => {
  if (loader.value) {
    loader.value.classList.remove("loading_out");
    setTimeout(()=>{
      next();
      emit('check_loading');
    },1000)
  }
}

defineExpose({
  loading_out,
  loading_in,
})

</script>

<template>
  <div ref="loader" class="loading">
    <loading-cat/>
  </div>
</template>

<style scoped lang="scss">

div {
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 100;

  opacity: 1;
  transform: translateY(0);
  transition: transform .5s ease-in-out;

  .loading_out {
    transform: translateY(100%);
  }
}


</style>