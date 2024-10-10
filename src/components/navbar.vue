<script setup>

</script>

<template>
  <nav>
    <div class="navbar-narrow">
      <div class="container nav-container">
        <label for=""></label>
        <input class="checkbox" type="checkbox" name="" id=""/>
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="logo">
          <h1>Sept'</h1>
        </div>
        <div class="menu-items">
          <ul>
            <router-link to="/page-1" style="--i:1">Home</router-link>
            <router-link to="/page-2" style="--i:2">About me</router-link>
            <router-link to="/page-3" style="--i:3">Skills</router-link>
            <router-link to="/page-4" style="--i:4">Projects</router-link>
            <router-link to="/page-5" style="--i:5">School Experiences</router-link>
            <router-link to="/page-6" style="--i:6">Contact</router-link>
            <router-link to="/page-7" style="--i:7">End</router-link>
          </ul>
        </div>
      </div>
    </div>

    <div class="navbar-wide">
      <nav class="navbar">
        <router-link to="/page-1" style="--i:1">Home</router-link>
        <router-link to="/page-2" style="--i:2">About me</router-link>
        <router-link to="/page-3" style="--i:3">Skills</router-link>
        <router-link to="/page-4" style="--i:4">Projects</router-link>
        <router-link to="/page-5" style="--i:5">School Experiences</router-link>
        <router-link to="/page-6" style="--i:6">Contact</router-link>
        <router-link to="/page-7" style="--i:7">End</router-link>
      </nav>
    </div>
  </nav>

</template>


<style lang="scss" scoped>

nav {
  position: fixed;
  z-index: 10;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1050px;
  width: 100%;
  position: relative;
  height: 100px;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
}


.navbar-narrow {
  width: 100%;
  box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
  opacity: 1;
  top:0;
  left:0;
  transition: all 0.5s;
  position: fixed;
}

.navbar-narrow .menu-items {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  padding-top: 100px;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  height: 100vh;
  width: auto;
  transform: translateX(-200%);
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-in-out;
  text-align: center;
  background: white;
}


.navbar-narrow .nav-container a {
  text-decoration: none;
  color: #0e2431;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 1.2em;
  transition: transform 0.3s ease;
}

.navbar-narrow .nav-container a:hover {
  transform: scale(1.1);
}

.nav-container .checkbox {
  position: absolute;
  z-index: 11;
  display: block;
  height: 32px;
  width: 32px;
  left: 20px;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  height: 26px;
  width: 32px;
  position: absolute;
  z-index: 10;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #0e2431;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0 0;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0 100%;
  transition: transform 0.4s ease-in-out;
}

.navbar-narrow .menu-items ul * {
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start
}

.logo {
  position: absolute;
  left: 77px;
  font-size: 1.2rem;
  color: #0e2431;
  transition: all 0.5s;
  transition-delay: .2s;
}

.nav-container input[type="checkbox"]:checked ~ .menu-items {
  transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked ~ .logo {
  opacity: 0;
  transform: translateX(200px);
}


.navbar-wide {
  width: 100%;
  height: 62px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 50px 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
  background: white;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
}

.navbar-wide nav {
  margin-right: 50px;
}

.navbar-wide nav > * {
  display: inline-block;
  margin: auto 12px;
  text-decoration: none;
  color: #0e2431;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  opacity: 1;
  transition: all 0.5s;
  transition-delay: calc(var(--i) * .1s / 2);
}

@media screen and (max-width: 1056px) {
  .navbar-wide nav > * {
    opacity: 0;
    transform: translateX(100px) translateY(-100px);
    transition: all 0.5s;
    transition-delay: calc(var(--i) * .1s / 2);
  }
  .navbar-narrow {
    z-index: 11;
  }
}

@media screen and (min-width: 1056px) {
  .navbar-narrow {
    opacity: 0;
    transform: translateX(-20px) translateY(20px);
  }
}

</style>