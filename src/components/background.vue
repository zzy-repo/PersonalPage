<script setup>
import {onMounted, ref} from "vue";

onMounted(() => {
  const cvs = document.getElementById('bgCanvas');
  const ctx = cvs.getContext('2d');

  function init() {
    cvs.width = cvs.clientWidth;
    cvs.height = cvs.clientHeight;
  }

  const points = ref(30);
  function calculatePoints() {
    if (cvs.width  < 600) {
      points.value = 12;
    } else if (cvs.width  < 1000) {
      points.value = 20;
    } else {
      points.value = 30;
    }
  }

  init();
  // 防止因为界面太小而导致画太密集
  calculatePoints()
  // 添加 resize 事件监听器来重新初始化画布尺寸,防止窗口伸缩导致画布拉伸
  window.addEventListener('resize', init);


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  class Point {
    constructor() {
      this.r = 3;
      this.x = getRandomInt(0, cvs.width - this.r / 2);
      this.y = getRandomInt(0, cvs.height - this.r / 2);
      this.xSpeed = getRandomInt(-50, 50);
      this.ySpeed = getRandomInt(-50, 50);
      this.lastDrawTime = null;
    }

    draw() {
      if (this.lastDrawTime) {
        const duration = (Date.now() - this.lastDrawTime) / 1000;
        const xDis = this.xSpeed * duration;
        const yDis = this.ySpeed * duration;
        const x = this.x + xDis;
        const y = this.y + yDis;

        // 检查坐标是否超出边界,若碰到边界则反弹
        if (x > cvs.width - this.r || x < 0) {
          this.xSpeed = -this.xSpeed;
        }
        if (y > cvs.height - this.r || y < 0) {
          this.ySpeed = -this.ySpeed;
        }

        this.x = x;
        this.y = y;
      }

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgb(200, 200, 200 , 0.5)';
      ctx.fill();
      this.lastDrawTime = Date.now();
    }
  }

  class Graph {
    constructor(pointNumber = points.value, maxDis = 500) {
      this.points = new Array(pointNumber).fill(0).map(() => new Point());
      this.maxDis = maxDis;
    }

    draw() {
      requestAnimationFrame(() => {
        this.draw();
      });
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      for (let i = 0; i < this.points.length; i++) {
        const p1 = this.points[i];
        p1.draw();
        for (let j = i + 1; j < this.points.length; j++) {
          const p2 = this.points[j];
          const d = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          if (d > this.maxDis) {
            continue;
          }
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.closePath();
          ctx.strokeStyle = `rgba(200,200,200,${(1 - d / this.maxDis) * 0.5})`;
          ctx.stroke();
        }
      }
    }
  }

  const g = new Graph();
  g.draw();
});

</script>

<template>
  <canvas id="bgCanvas"/>
</template>

<style scoped lang="scss">


canvas {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  background: linear-gradient(to bottom, #ffffff, #eeeeee);
}
</style>