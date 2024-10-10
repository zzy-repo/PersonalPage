<script setup>
import Navbar from "@components/navbar.vue";
import {onMounted} from "vue";
import NextPageArrow from "@components/nextPageArrow.vue";
import Background from "@components/background.vue";

function downloadFile(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


onMounted(() => {
  const multiple = 200;
  const mouseOverContainer = document.getElementsByTagName("body")[0];
  const element = document.getElementById("element");

  function transformElement(x, y) {
    let box = element.getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / multiple;
    const calcY = (x - box.x - box.width / 2) / multiple;

    element.style.transform = "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
  }

  mouseOverContainer.addEventListener("mousemove", (e) => {
    window.requestAnimationFrame(function () {
      transformElement(e.clientX, e.clientY);
    });
  });

  mouseOverContainer.addEventListener("mouseleave", (e) => {
    window.requestAnimationFrame(function () {
      element.style.transform = "rotateX(0) rotateY(0)";
    });
  });

})
</script>

<template>
  <background/>
  <navbar/>
  <div class="card-container">
    <div id="element">
      <h1>联系我</h1>
      <p style="font-size: 15px">
        我目前正在积极寻找工作机会或实习岗位，如果贵公司感兴趣，欢迎与我取得联系。我非常期待有机会加入一个充满活力的团队,希望能够在实际的项目中积累经验，在实践中不断学习和成长。<br>
        <b>下面就是是我的个人简历</b>，可以通过点击以下链接下载查看。<br>
        目前定居于杭州的下沙区。如果你恰好也在附近，欢迎随时与我联系。我们可以找个时间坐下来，喝杯咖啡，认识一下，聊聊技术,聊聊想法,或是一起创造一些有趣的东西
      </p>
      <div class="det"><i class="fa fa-map-marker"></i> 杭州市,下沙区</div>
      <div class="det"><i class="fa fa-phone"></i> 17373703303</div>
      <div class="det"><i class="fa fa-envelope-o"></i> 17373703303@163.com</div>
      <div class="det"><i class="fa fa-wechat"></i> a1061342204</div>
      <div style="text-align: center;">
        <button id="cv" class="fa fa-id-card" @click="downloadFile('/data/简历.pdf','曾智勇')"></button>
        <button id="github" class="fa fa-github" onclick="window.location.href='https://github.com/zzy-repo';"></button>
      </div>
    </div>
  </div>
  <next-page-arrow/>
</template>

<style scoped lang="scss">

#element {
  padding: 30px;
}

.card-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  perspective: 500px;

  opacity: 0;
  animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  animation-delay: .5s;
}

#element {
  transform-origin: center;
  width: 850px;
  min-width: 850px;
  margin: calc(50vh - 190px) auto;
  max-width: calc(100vw - 60px);
  background: white;
  border: 3px solid #000;
  // 实现3d卡片效果
  transform-style: preserve-3d;

  .skill-bar {
    margin: 60px;
  }

}


#image {
  margin: auto;
  width: 300px;
  height: 450px;
  display: inline-block;
  background: url("/location.png") no-repeat center/100%;
}

.content {
  float: right;
  max-width: 500px;
  height: 100%;
  padding: 25px;
}

h1 {
  margin: 0;
  font-weight: normal;
  color: #555555;
  font-size: 28px;

}

p {
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 30px;
  color: #777777;
  line-height: 1.8;
}

.det {
  font-size: 12px;
  margin-bottom: 15px;
  color: #777777;
}

i {
  float: left;
  font-size: 18px !important;
  margin: 0 8px 0 0;
}

button {
  margin: 15px 4px;
  padding: 13px 9px;
  display: inline-block;
  cursor: pointer;
  background: none;
  color: #546973;
  border: 2px solid #78909C;
  transition: all 0.3s;
  border-radius: 8px;
  outline: 0;
}

button:hover {
  border-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

button:after {
  font-family: 'Montserrat', sans-serif;
  display: block;
  font-size: 11px;
  margin-top: 8px;
}

#cv:after {
  content: '简历链接';
}

#github:after {
  content: 'GitHub';
}

.fa-envelope:after {
  content: 'Email';
  margin: 8px 13px 0;
}

@media only screen and (max-width: 720px) {
  .map {
    height: 450px;
    margin: calc(50vh - 225px) auto;
    overflow: hidden;
  }
  #image {
    width: 100%;
    height: 200px;
  }
  .content {
    float: right;
    width: 100%;
  }
  button {
    float: right;
    margin-top: -75px;
  }
  #element {
    min-width: auto;
  }
}

@media only screen and (max-width: 460px) {
  p {
    display: none;
  }
  h1 {
    margin-bottom: 20px;
  }
  button {
    float: none;
    margin-top: 10px;
  }
  .det {
    margin-bottom: 9px;
  }
  #element {
    min-width: auto;
  }
}

.pin-box {
  width: 100%;
  height: 100%;
}


.pin {
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: #89849b;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -20px;
  animation-name: bounce;
  animation-fill-mode: both;
  animation-duration: 1s;
}

.pin:after {
  content: '';
  width: 14px;
  height: 14px;
  margin: 8px 0 0 8px;
  background: #2F2F2F;
  position: absolute;
  border-radius: 50%;
}

.pulse {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 14px;
  width: 14px;
  left: 50%;
  top: 50%;
  margin: 11px 0px 0px -12px;
  transform: rotateX(55deg);
  z-index: -2;
}

.pulse:after {
  content: "";
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: absolute;
  margin: -13px 0 0 -13px;
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
  opacity: 0.0;
  box-shadow: 0 0 1px 2px #89849b;
  animation-delay: 1.1s;
}

@keyframes pulsate {
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0.0;
  }
  50% {
    opacity: 1.0;
  }
  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
}

@keyframes bounce {
  0% {
    opacity: 0;
    transform: translateY(-2000px) rotate(-45deg);
  }
  60% {
    opacity: 1;
    transform: translateY(30px) rotate(-45deg);
  }
  80% {
    transform: translateY(-10px) rotate(-45deg);
  }
  100% {
    transform: translateY(0) rotate(-45deg);
  }
}


</style>