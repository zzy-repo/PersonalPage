<script setup>
import Navbar from "@/components/navbar.vue";
import Background from "@components/background.vue";
import NextPageArrow from "@components/nextPageArrow.vue";
</script>

<template>
  <navbar/>
  <background/>

  <div class="accordion-container">
    <h1 style="margin: 30px">项目经验</h1>
    <div class="accordion">
      <input type="radio" name="select" class="accordion-select" checked/>
      <div class="accordion-title"><span>个人网站开发 | html、css、js、vue</span></div>
      <div class="accordion-content">
        <p>
          <b style="font-size: large">个人网站开发 (本站)</b><br>
          这是一个基于<b>Vue.js框架</b>，结合<b>Grid</b>和<b>Flex布局</b>技术，开发的一个<b>响应式个人网站</b><br>
          通过平滑的界面跳转动画和<b>Canvas动态背景</b>，增强了网站的交互性和视觉吸引力。<br>
          实现了<b>动画懒加载</b>技术，优化了页面加载速度和性能。<br>
          使用<b>SCSS</b>进行样式管理，保持了网站设计的一致性和专业性。<br>
          创新性地融入了<b>3D悬浮卡片</b>等元素，提升了网站的视觉层次和动态效果。<br>
          在开发过程中，避免了对第三方组件库的依赖，采用<b>原生CSS</b>和<b>JavaScript</b>技术，加深了对前端开发技术的理解，提高了实现自定义视觉效果的灵活性和效率。
        </p>
      </div>

      <input type="radio" name="select" class="accordion-select" checked/>
      <div class="accordion-title"><span>前后端分离的网盘后端系统开发 | Golang、MySQL、Redis</span></div>
      <div class="accordion-content">
        <p>
          <b style="font-size: large">前后端分离的网盘后端系统开发</b><br>
          主要职责:独立后端开发<br>
          实现功能:<br>
          账号管理和用户鉴权：Token 和拦截器实现<b>用户账号管理和鉴权</b><br>
          数据持久化和主从同步：MySQL 实现<b>数据持久化存储, 主从同步</b>, 增强数据可用性和读写分离<br>
          文件秒传, 分块上传和断点上传：哈希技术结合 Redis 实现了<b>文件秒传, 分块上传和断点上传</b>, 提升上传效率, 优化体验<br>
          开发工具 : 使用了 gin, gorm 等流行的项目开发工具, 提高了开发效率<br>
        </p>
      </div>

      <input type="radio" name="select" class="accordion-select"/>
      <div class="accordion-title"><span>前后端分离的个人博客系统 | SpringBoot、Vue、MySQL、Redis</span></div>
      <div class="accordion-content">
        <p>
          <b style="font-size: large">前后端分离的个人博客系统</b><br>
          主要职责:独立全栈开发<br>
          实现功能:<br>
          安全框架整合：整合 Shiro 和 JWT 以及 Redis，实现基于 Token 的<b>身份验证和会话管理</b>。<br>
          统一结果封装：自定义统一异常处理, 统一结果封装, 提升系统稳定性。<br>
          开发工具：使用了如 Vue Router, Vuex, axios, Element Plus, Mybatis Plus, SpringDoc 等开发工具加速项目开发<br>
        </p>

      </div>

      <input type="radio" name="select" class="accordion-select"/>
      <div class="accordion-title"><span>云端私有化部署的个人笔记知识库 | Ubuntu 自建云服务器、宝塔、WebDAV、AList</span>
      </div>
      <div class="accordion-content">
        <p>
          <b style="font-size: large">云端私有化部署的个人笔记知识库</b><br>
          主要职责:独立设计部署<br>
          实现功能:<br>
          多端同步：WebDAV 协议实现笔记在不同设备间的同步。<br>
          笔记数据展示：DataViewJS 用于笔记数据的统计和展示。<br>
          MOC 路由导航：采用 MOC 方法进行笔记内容的导航。<br>
          版本控制: 使用 git 定期上传实现了全自动版本控制, 方便数据的备份和回溯<br>
        </p>
      </div>

      <input type="radio" name="select" class="accordion-select"/>
      <div class="accordion-title"><span>其他的一些小的练手demo</span></div>
      <div class="accordion-content">
        <a href="https://github.com/zzy-repo/vue-springboot-jwt">Vue + Spring Boot 整合 JWT 实现用户认证</a>
        <a href="https://github.com/zzy-repo/CodeGenerator">MyBatis-Plus 代码生成器配置</a>
        <a href="https://github.com/zzy-repo/SpringBoot-Quick-Start">SpringBoot 快速启动模板</a>
        <a href="https://github.com/zzy-repo/shiro_demo">SpringBoot集成Shiro的安全认证程序</a>
        <a href="https://github.com/zzy-repo/UnionResp">SprigBoot全局响应和异常处理</a>
        <a href="https://github.com/zzy-repo/YamlConfigReader">YamlConfigReader</a>
        <a href="https://github.com/zzy-repo/SelectPage">SprigBoot简单的分页查询操作</a>
      </div>
    </div>
  </div>
  <nextPageArrow/>
</template>

<style scoped lang="scss">

.accordion-content a {
  font-weight: bold;
  color: #777777;
  line-height: 1.8;
}

span {
  color: #555;
  font-weight: bold;
  font-size: 17px;
}

p {
  font-size: 15px;
  color: #777;
  line-height: 1.8;

}

.accordion-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.accordion {
  margin: 40px;
  box-sizing: border-box;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  animation: shadow-pop-br 1s cubic-bezier(0.470, 0.000, 0.745, 0.715) both, fadeInRight 1s both;
}


.accordion-select {
  cursor: pointer;
  margin: 0;
  opacity: 0;
  z-index: 10;
}

.accordion-title {
  position: relative;
}


.accordion-title:not(:nth-last-child(2))::after {
  border: 1px solid transparent;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.accordion-title span {
  bottom: 0;
  box-sizing: border-box;
  display: block;
  position: absolute;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.accordion-content {
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  transition: margin .5s ease 0.1s;

  display: flex;
  flex-wrap: wrap;
  white-space: normal;

  background-color: #f7f7f7;
  color: #7f8787;
  height: 280px;
  margin-bottom: -280px;
  margin-right: 0;
  padding: 30px;

}

.accordion-select:checked + .accordion-title + .accordion-content {
  margin-bottom: 0;
  margin-right: 0;
}

/* Generated styles starts here */

.accordion {
  border-color: #dedede;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  height: auto;
}

.accordion-title,
.accordion-select {
  border-bottom-color: #333333;
  background-color: #ffffff;
  color: #7f8787;
  width: 100%;
  min-height: 65px;
  font-size: 15px;
  word-wrap: break-word;
  word-break: normal;


}

.accordion-select {
  margin-bottom: -65px;
  margin-right: 0;
}

.accordion-title:not(:nth-last-child(2))::after {
  border-bottom-color: rgb(234, 234, 234);
  border-right-color: transparent;
}

.accordion-select:hover + .accordion-title,
.accordion-select:checked + .accordion-title {
  background-color: #ffffff;
}

.accordion-title span {
  transform: rotate(0deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);
  padding-left: 33px;
  padding-right: 33px;
  line-height: 65px;
}


</style>

