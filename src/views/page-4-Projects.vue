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

        </p>
      </div>

      <input type="radio" name="select" class="accordion-select" checked/>
      <div class="accordion-title"><span>前后端分离的网盘后端系统开发 | Golang、MySQL、Redis</span></div>
      <div class="accordion-content">
        <p>
          实现功能:
          账号管理和用户鉴权：Token 和拦截器实现用户账号管理和鉴权
          数据持久化和主从同步：MySQL 实现数据持久化存储, 主从同步, 增强数据可用性和读写分离
          文件秒传, 分块上传和断点上传：哈希技术结合 Redis 实现了文件秒传, 分块上传和断点上传, 提升上传效率, 优化体验
          开发工具 : 使用了 gin, gorm 等流行的项目开发工具, 提高了开发效率

          独立后端开发
        </p>
      </div>

      <input type="radio" name="select" class="accordion-select"/>
      <div class="accordion-title"><span>前后端分离的个人博客系统 | SpringBoot、Vue、MySQL、Redis</span></div>
      <div class="accordion-content">
        <p>
          实现功能:
          安全框架整合：整合 Shiro 和 JWT 以及 Redis，实现基于 Token 的身份验证和会话管理。
          统一结果封装：自定义统一异常处理, 统一结果封装, 提升系统稳定性。
          开发工具：使用了如 Vue Router, Vuex, axios, Element Plus, Mybatis Plus, SpringDoc 等开发工具加速项目开发

          独立全栈开发
        </p>

      </div>

      <input type="radio" name="select" class="accordion-select"/>
      <div class="accordion-title"><span>云端私有化部署的个人笔记知识库 | Ubuntu 自建云服务器、宝塔、WebDAV、AList</span></div>
      <div class="accordion-content">
        <p>
          实现功能:
          多端同步：WebDAV 协议实现笔记在不同设备间的同步。
          笔记数据展示：DataViewJS 用于笔记数据的统计和展示。
          MOC 路由导航：采用 MOC 方法进行笔记内容的导航。
          版本控制: 使用 git 定期上传实现了全自动版本控制, 方便数据的备份和回溯

          独立设计部署
        </p>
      </div>

      <input type="radio" name="select" class="accordion-select"/>
      <div class="accordion-title"><span>其他的一些小的练手demo</span></div>
      <div class="accordion-content">

      </div>
    </div>
  </div>
  <nextPageArrow/>
</template>

<style scoped lang="scss">

span{
  color: #555;
  font-weight: bold;
  font-size: 17px;
}

p {
  font-size: 15px;
  color: #777;
  line-height: 1.8;

}

.accordion-container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.accordion {
  width: 800px;
  box-sizing: border-box;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  animation: shadow-pop-br 1s cubic-bezier(0.470, 0.000, 0.745, 0.715) both ,fadeInRight 1s both;
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
.accordion-select  {
  border-bottom-color: #333333;
  background-color: #ffffff;
  color: #7f8787;
  width: 100%;
  height: 65px;
  font-size: 15px;


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

.accordion-title span  {
  transform: rotate(0deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);
  padding-left: 33px;
  padding-right: 33px;
  line-height: 65px;
}



</style>

