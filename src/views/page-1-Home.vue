<script setup>
import {onMounted} from 'vue';
import lazyAnimate from '@/js/lazy-animate.js';
import LearnMoreButton from "@/components/learnMoreButton.vue";
import Background from "@/components/background.vue";
import Navbar from "@components/navbar.vue";

onMounted(() => {
  const observer = lazyAnimate('.lazy-animate', {
    rootMargin: '50%',
    threshold: 0.5,
  });
});

</script>

<template>
  <background/>
  <navbar/>
  <div class="homeview-container">
    <div class="home-content">
      <h3 class="lazy-animate">Hello! It's me!</h3>
      <h1 class="lazy-animate">You can call me zzy or Sept'</h1>
      <h3 class="lazy-animate">
        <br>
        <vuetyped :loop="true" :smart-backspace="true"
                  :strings="['Front-end developers', 'Student','Innovators','Psychology amateur','Team Coordinator' ,'Lifelong learners' ]">
          <p>And I'm a&nbsp</p>
          <div class="typing" style="display: inline-block;"/>
        </vuetyped>
        <br>
        Now I am focusing on the technology of front-end development and I'm interested in pursuing a career in this
        field.
      </h3>
      <br>
      <learn-more-button/>
    </div>
    <div class="home-image">
      <img alt="" class="lazy-animate" src="/小熊猫-白底.jpg">
    </div>
  </div>


</template>

<style lang="scss">
.homeview-container {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #777;
  z-index: 1;

  .home-content {
    width: 450px;
    margin-left: 15vw;

    h1 {
      font-size: $font-size-large;
      font-weight: 800;
      margin: 10px 0;
      opacity: 0;

      &.animate {
        animation: slideInFromLeft 1s ease forwards;
        animation-delay: .2s;
      }
    }

    h3 {
      &:nth-of-type(1) {
        font-size: $font-size-medium;
        font-weight: 550;
        opacity: 0;

        &.animate {
          animation: slideInFromTop 1s ease forwards;
          animation-delay: .2s;
        }
      }

      &:nth-of-type(2) {
        display: inline-block;
        margin-bottom: $font-size-medium;
        opacity: 0;

        &.animate {
          animation: slideInFromBottom 1s ease forwards;
          animation-delay: .2s;
        }
      }

      span {
        color: #777;
      }
    }
  }

  .home-image img {
    margin: 15vw;
    max-width: 350px;
    border-radius: 50%;
    opacity: 0;

    &.animate {
      animation: slideInRightAndExpand 1s ease forwards, float 4s ease-in-out infinite, shadow-br 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      animation-delay: .5s, 2s, .8s;
    }
  }
}

@media screen and (max-width: 1056px) {
  .home-image {
    display: none;
  }
  .homeview-container {
    justify-content: center;
  }
  .home-content{
    margin: auto;
  }
}
</style>

