<script setup>
import SkillBar from "@components/skillBar.vue";
import NextPageArrow from "@components/nextPageArrow.vue";
import Background from "@components/background.vue";
import Navbar from "@components/navbar.vue";
import axios from "axios";
import {onBeforeMount, ref} from "vue";

const front_skills = ref(null);
const back_skills = ref(null);

onBeforeMount(() => {
  axios.get('/data/front-skills.json')
      .then((res) => {
        front_skills.value = res.data;
      })
      .catch((err) => {
        console.error("请求失败：", err);
      });

  axios.get('/data/back-skills.json')
      .then((res) => {
        back_skills.value = res.data;
      })
      .catch((err) => {
        console.error("请求失败：", err);
      });
});


</script>

<template>
  <background/>
  <navbar/>
  <div class="skillsPage-container">
    <div class="skill-container">
      <h1>Here is my skills</h1>
      <div class="skill">
        <div id="element" style="--i:1">
          <h2>前端</h2>
          <skill-bar class="skill-bar" :skills="front_skills" v-if="front_skills"/>
        </div>
        <div id="element" style="--i:2">
          <h2>后端</h2>
          <skill-bar class="skill-bar" :skills="back_skills" v-if="back_skills"/>
        </div>
      </div>
    </div>
  </div>
  <next-page-arrow/>
</template>

<style scoped lang="scss">
.skillsPage-container {
  width: 100%;
  height: 100%;
}

.skill-container {
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;


  h1 {
    margin-top: 150px;
    text-align: center;
    color: #777777;
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    animation-delay: .5s;
  }

  .skill {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h2 {
      text-align: center;
      margin-bottom: 30px;
      color: #777777;
    }
  }
}

#element {
  width: 500px;
  margin: 60px 50px;
  // 实现毛玻璃效果
  border-radius: 20px;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.055);
  border: 0 rgba(255, 255, 255, 0.4) solid;
  border-bottom: 0 rgba(40, 40, 40, 0.35) solid;
  border-right: 0 rgba(40, 40, 40, 0.35) solid;
  // 实现3d卡片效果
  transform-style: preserve-3d;
  transition: all .1s;
  //动画阴影
  animation: shadow-br 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, fadeInLeft 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  animation-delay: calc(var(--i) * .2s);
}


</style>