<script setup>
import {defineProps, onMounted, ref} from 'vue';

const props = defineProps({
  skills: {
    type: Array,
    required: true
  }
});

const skillsRef = ref(null);

onMounted(() => {
  props.skills.forEach((skill, index) => {
    setTimeout(() => {
      const bar = skillsRef.value.querySelector(`.bar[data-name="${skill.name}"]`);
      const pct = skillsRef.value.querySelector(`.bar[data-name="${skill.name}"] .pct`);
      if (bar) {
        pct.style.opacity = 1;
        bar.style.width = `${skill.percent}%`;
      }
    }, skill.delay || 0);
  });
})


</script>

<template>
  <div class="skill-container">
    <ul id="skills" ref="skillsRef">
      <li v-for="skill in props.skills" :key="skill.name">
        <i :class="skill.icon"></i>
        {{ skill.name }}
        <div class="bar_container">
          <span
              class="bar"
              :data-name="skill.name"
              :data-color="skill.color"
              :style="{ backgroundColor: skill.color }"
              :aria-valuenow="skill.percent"
              :aria-valuemin="0"
              :aria-valuemax="100"
          >
            <span class="pct" :style="{ color: skill.color }">{{ skill.text }}</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>


<style scoped lang="scss">

ul {
  list-style-type: none;
}

#skills {
  margin: 0 auto;
  width: 80%;
}

#skills li {
  position: relative;
  margin-bottom: 32px;
  padding-left: 6px;
}

.bar_container,
.bar {
  position: absolute;
  left: 0;
  height: 5px;
  border-radius: 5px;
  content: "";
}

.bar_container {
  bottom: -8px;
  width: 100%;
  background-color: #333;
  text-align: right;
}

.bar {
  top: 0;
  width: 0;
  transition: width 2s ease;
}

.pct {
  position: absolute;
  top: -19px;
  right: 0;
  opacity: 0;
  transition: opacity 2s ease;
  transition-delay: 1s;
  font-weight: bold;
}
</style>

