<script setup>
import Navbar from "@components/navbar.vue";
import Background from "@components/background.vue";
import NextPageArrow from "@components/nextPageArrow.vue";
import {onMounted} from "vue";
import lazyAnimate from "@/js/lazy-animate.js";

onMounted(() => {
  const observer = lazyAnimate('.lazy-animate', {
    rootMargin: '50%',
    threshold: 0.5,
  });
});
</script>

<template>
  <navbar/>
  <background/>

  <div class="container">
    <h1 style="text-align: center">校园实践经历</h1>

    <div class="timeline-container">

      <div class="page" data-uia-timeline-adapter-skin-4="uia-card-skin-#1" data-uia-timeline-skin="4">
        <div class="uia-timeline">
          <div class="uia-timeline__container">
            <div class="uia-timeline__line"></div>
            <div class="uia-timeline__annual-sections">
              <span aria-hidden="true" class="uia-timeline__year">2024</span>
              <div class="uia-timeline__groups">
                <section aria-labelledby="timeline-demo-4-heading-2" class="uia-timeline__group  lazy-animate" style="--i:1">

                  <div class="uia-timeline__point uia-card" data-uia-card-mod="1" data-uia-card-skin="1">
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-2" class="ra-heading"
                            style="color: #555555;margin-bottom: 15px">校电影协会</h3>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p style="color: #777777; line-height: 1.8;">
                            1,主导负责社团创建相关工作如校企沟通、社团答辩、社团规划、初步招新、在校宣传等任务 <br>
                            2,负责与团委,影院,以及校内或校外的各大社团进行沟通,联合举办了多次活动 <br>
                            3,创立并运营社群(现已500人)和社团公众号(800人),在校有一定的影响力 <br>
                            4,开创性的筹划了日常放映,电影讲座,特惠观影等活动,获得学生一致好评
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </section>

              </div>
            </div>


            <div class="uia-timeline__annual-sections">
              <span aria-hidden="true" class="uia-timeline__year">2023</span>
              <div class="uia-timeline__groups">

                <section aria-labelledby="timeline-demo-4-heading-2" class="uia-timeline__group lazy-animate" style="--i:2">
                  <div class="uia-timeline__point uia-card" data-uia-card-mod="1" data-uia-card-skin="1">
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-2" class="ra-heading"
                            style="color: #555555;margin-bottom: 15px">杭电华为智能基座社团</h3>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p style="color: #777777; line-height: 1.8;">
                            1, 主导负责社团创建相关工作如校企沟通、社团答辩、社团规划、初步招新、在校宣传等任务 <br>
                            2, 统筹策划举办了如华为创享日、华为高校行等大型活动 <br>
                            3, 作为主讲人主持社团在校的各项大小活动 <br>
                            4, 招募在校技术大佬并组建了讲师团体为学生进行日常授课
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="timeline-demo-4-heading-2" class="uia-timeline__group lazy-animate" style="--i:3">
                  <div class="uia-timeline__point uia-card" data-uia-card-mod="1" data-uia-card-skin="1">
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-2" class="ra-heading"
                            style="color: #555555;margin-bottom: 15px">杭州亚运会优秀志愿者</h3>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p style="color: #777777; line-height: 1.8;">
                            在2023年9月份的杭州亚运会比赛期间担任了新闻宣传领域志愿者,积极走访场馆各个角落，收集新闻素材，并负责了领域内的新闻发布会整体策划组织活动
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="timeline-demo-4-heading-2" class="uia-timeline__group lazy-animate" style="--i:4">
                  <div class="uia-timeline__point uia-card" data-uia-card-mod="1" data-uia-card-skin="1">
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-2" class="ra-heading"
                            style="color: #555555;margin-bottom: 15px">暑期实践活动</h3>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p style="color: #777777; line-height: 1.8;">
                            2023年7月份滟澜社区居民幸福度调查中积极走访居民，完成问卷的收集工作
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            <div class="uia-timeline__annual-sections">
              <span aria-hidden="true" class="uia-timeline__year">2022</span>
              <div class="uia-timeline__groups">

                <section aria-labelledby="timeline-demo-4-heading-2" class="uia-timeline__group lazy-animate" style="--i:5">
                  <div class="uia-timeline__point uia-card" data-uia-card-mod="1" data-uia-card-skin="1">
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-2" class="ra-heading"
                            style="color: #555555;margin-bottom: 15px">杭电校科技协会</h3>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p style="color: #777777; line-height: 1.8;">
                            校科技协会
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="timeline-demo-4-heading-2" class="uia-timeline__group lazy-animate" style="--i:6">
                  <div class="uia-timeline__point uia-card" data-uia-card-mod="1" data-uia-card-skin="1">
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-2" class="ra-heading"
                            style="color: #555555;margin-bottom: 15px">乡村振兴社区实践服务</h3>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p style="color: #777777; line-height: 1.8;">
                            2022年7月份的乡村振兴社区实践服务中作为讲师为社区学生上课介绍亚运会
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>


            <div class="uia-timeline__annual-sections">
              <span aria-hidden="true" class="uia-timeline__year">2021</span>
              <div class="uia-timeline__groups">

                <section aria-labelledby="timeline-demo-4-heading-2" class="uia-timeline__group lazy-animate" style="--i:7">
                  <div class="uia-timeline__point uia-card" data-uia-card-mod="1" data-uia-card-skin="1">
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-2" class="ra-heading"
                            style="color: #555555;margin-bottom: 15px">杭电校科协</h3>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p style="color: #777777; line-height: 1.8;">

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="timeline-demo-4-heading-2" class="uia-timeline__group lazy-animate" style="--i:8">
                  <div class="uia-timeline__point uia-card" data-uia-card-mod="1" data-uia-card-skin="1">
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-2" class="ra-heading"
                            style="color: #555555;margin-bottom: 15px">辩论队</h3>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p style="color: #777777; line-height: 1.8;">

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
  <nextPageArrow/>
</template>

<style lang="scss" scoped>

.container {
  margin-top: 150px;
}

/*
=====
UIA-TIMELINE
=====
*/

.uia-timeline__container {
  display: var(--uia-timeline-display, grid);
}

.uia-timeline__groups {
  display: var(--uia-timeline-groups-display, grid);
  gap: var(--uia-timeline-groups-gap, 1rem);
}

/*
SKIN 1
*/

[data-uia-timeline-skin="skin-1"] .uia-timeline__step {
  line-height: 1;
  font-size: var(--uia-timeline-step-font-size, 2rem);
  font-weight: var(--uia-timeline-step-font-weight, 700);
  color: var(--uia-timeline-step-color);
}

[data-uia-timeline-skin="skin-1"] .uia-timeline__point-intro {
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  gap: var(--uia-timeline-point-intro-gap, .5rem);
}

[data-uia-timeline-skin="skin-1"] .uia-timeline__point-date {
  grid-row: 1;
  grid-column: 2;
}

[data-uia-timeline-skin="skin-1"] .uia-timeline__point-heading {
  grid-column: span 2;
}

[data-uia-timeline-skin="skin-1"] .uia-timeline__point-description {
  margin-block-start: var(--uia-timeline-group-gap, 1rem);
  inline-size: min(100%, var(--uia-timeline-content-max-limit));
}

/*
SKIN 2
*/

[data-uia-timeline-skin="2"] {
  --_uia-timeline-line-color_default: #222;
  --_uia-timeline-minimal-gap: var(--uia-timeline-minimal-gap, .5rem);
  --_uia-timeline-space: calc(var(--_uia-timeline-arrow-size) + var(--_uia-timeline-dot-size) + var(--_uia-timeline-dot-size) / 2 + var(--_uia-timeline-minimal-gap));
  --_uia-timeline-dot-size: var(--uia-timeline-dot-size, 1rem);
  --_uia-timeline-arrow-size: var(--uia-timeline-arrow-size, .25rem);
  --_uia-timeline-arrow-position: var(--uia-timeline-arrow-position, 1rem);
}

[data-uia-timeline-skin="2"] .uia-timeline__container {
  position: relative;
  padding-inline-start: calc(var(--_uia-timeline-space));
}

[data-uia-timeline-skin="2"] .uia-timeline__line {
  inline-size: var(--uia-timeline-line-thickness, 3px);
  block-size: 100%;
  background-color: var(--uia-timeline-line-color, var(--_uia-timeline-line-color_default));

  position: absolute;
  inset-block-start: 0;
  inset-inline-start: calc(var(--_uia-timeline-dot-size) / 2);
  transform: translate(-50%);
}

[data-uia-timeline-skin="2"] .uia-timeline__group {
  position: relative;
}

[data-uia-timeline-skin="2"] .uia-timeline__dot {
  box-sizing: border-box;
  inline-size: var(--_uia-timeline-dot-size);
  block-size: var(--_uia-timeline-dot-size);

  border-radius: 50%;
  border: var(--uia-timeline-dot-border-thickness, 1px) solid var(--uia-timeline-dot-border-color, var(--_uia-timeline-line-color_default));
  background-color: var(--uia-timeline-dot-color, var(--_uia-timeline-line-color_default));

  position: absolute;
  /* - 4px is used for set the default gap from the top border */
  inset-block-start: calc(var(--uia-timeline-dot-position, var(--_uia-timeline-arrow-position)) + 4px);
  inset-inline-start: calc(-1 * var(--_uia-timeline-space));
}

[data-uia-timeline-skin="2"] .uia-timeline__point {
  position: relative;
  background-color: var(--uia-timeline-point-background-color, #fff);
}

[data-uia-timeline-skin="2"] .uia-timeline__point::before {
  content: "";
  inline-size: 0;
  block-size: 0;

  border: var(--_uia-timeline-arrow-size) solid var(--uia-timeline-arrow-color, var(--_uia-timeline-line-color_default));
  border-block-start-color: transparent;
  border-inline-end-color: transparent;

  position: absolute;
  /* - 6px is used for set the default gap from the top border */
  inset-block-start: calc(var(--_uia-timeline-arrow-position) + 6px);
  inset-inline-start: calc(-1 * var(--_uia-timeline-arrow-size) + 1px);
  transform: rotate(45deg);
}

[data-uia-timeline-adapter-skin-2="ui-card-skin-#1"] {
  --uia-card-border-thickness: var(--uia-timeline-point-border-thickness, 3px);
  --uia-card-border-color: var(--uia-timeline-point-border-color, var(--_uia-timeline-line-color_default));
  --uia-card-background-color: var(--uia-timeline-point-background-color);
}

/*
SKIN 3
*/

[data-uia-timeline-skin="3"] {
  --_uia-timeline-line-color_default: #222;
  --_uia-timeline-space: var(--uia-timeline-space, 1rem);
  --_uia-timeline-line-thickness: var(--uia-timeline-line-thickness, 2px);
  --_uia-timeline-point-line-position: var(--uia-timeline-point-line-position, 1rem);
}

[data-uia-timeline-skin="3"] .uia-timeline__container {
  position: relative;
  gap: var(--uia-timeline-annual-sections-gap, 2.5rem);
}

[data-uia-timeline-skin="3"] .uia-timeline__line {
  inline-size: var(--_uia-timeline-line-thickness);
  block-size: 100%;
  background-color: var(--uia-timeline-line-color, var(--_uia-timeline-line-color_default));

  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
}

[data-uia-timeline-skin="3"] .uia-timeline__annual-sections {
  display: grid;
  gap: 2rem;
}

[data-uia-timeline-skin="3"] .uia-timeline__groups {
  padding-inline-start: var(--_uia-timeline-space);
}

[data-uia-timeline-skin="3"] .uia-timeline__group {
  position: relative;
  isolation: isolate;
}

[data-uia-timeline-skin="3"] .uia-timeline__point {
  background-color: var(--uia-timeline-point-background-color, #fff);
}

[data-uia-timeline-skin="3"] .uia-timeline__point::before {
  content: "";
  inline-size: 100%;
  block-size: var(--_uia-timeline-line-thickness);
  background-color: var(--uia-timeline-line-color, var(--_uia-timeline-line-color_default));

  position: absolute;
  inset-block-start: var(--_uia-timeline-point-line-position);
  inset-inline-start: calc(-1 * var(--_uia-timeline-space));
  z-index: -1;
}

[data-uia-timeline-skin="3"] .uia-timeline__year {
  inline-size: fit-content;
  padding: var(--uia-timeline-year-padding, .25rem .75rem);
  background-color: var(--uia-timeline-year-background-color, var(--_uia-timeline-line-color_default));
  color: var(--uia-timeline-year-color, #f0f0f0);
}

[data-uia-timeline-adapter-skin-3="uia-card-skin-#1"] {
  --uia-card-border-thickness: var(--uia-timeline-point-border-thickness, 3px);
  --uia-card-border-color: var(--uia-timeline-point-border-color, var(--_uia-timeline-line-color_default));
  --uia-card-background-color: var(--uia-timeline-point-background-color);
}

/*
SKIN 4
*/

[data-uia-timeline-skin="4"] {
  --_uia-timeline-line-color_default: #222;
  --_uia-timeline-space: var(--uia-timeline-space, .5rem);
  --_uia-timeline-line-thickness: var(--uia-timeline-line-thickness, 2px);
  --_uia-timeline-annual-sections-safe-gap: var(--uia-timeline-annual-sections-safe-gap, 1.5rem);
  --_uia-timeline-point-line-position: var(--uia-timeline-point-line-position, 1rem);
  --_uia-timeline-year-size: var(--uia-timeline-year-size, 3.5rem);
}

[data-uia-timeline-skin="4"] .uia-timeline__container {
  position: relative;
  gap: var(--uia-timeline-annual-sections-gap, 2.5rem);
}

[data-uia-timeline-skin="4"] .uia-timeline__line {
  inline-size: var(--_uia-timeline-line-thickness);
  block-size: 100%;
  background-color: var(--uia-timeline-line-color, var(--_uia-timeline-line-color_default));

  position: absolute;
  inset-block-start: 0;
  inset-inline-start: calc(var(--_uia-timeline-year-size) / 2);
  transform: translate(-50%);
  z-index: -1;
}

[data-uia-timeline-skin="4"] .uia-timeline__annual-sections {
  display: flex;
  align-items: flex-start;
  isolation: isolate;
}

[data-uia-timeline-skin="4"] .uia-timeline__groups {
  padding-inline-start: var(--_uia-timeline-space);
  padding-block-start: calc(var(--_uia-timeline-year-size) + var(--_uia-timeline-annual-sections-safe-gap));
}

[data-uia-timeline-skin="4"] .uia-timeline__group {
  position: relative;
  isolation: isolate;

  opacity: 0;
  &.animate {
    animation: fadeInRight ease 1s both;
    animation-delay: calc(var(--i)*.2s);

  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

[data-uia-timeline-skin="4"] .uia-timeline__point {
  background-color: var(--uia-timeline-point-background-color, #fff);
}

[data-uia-timeline-skin="4"] .uia-timeline__point::before {
  content: "";
  inline-size: 100%;
  block-size: var(--_uia-timeline-line-thickness);
  background-color: var(--uia-timeline-line-color, var(--_uia-timeline-line-color_default));

  position: absolute;
  inset-block-start: var(--_uia-timeline-point-line-position);
  inset-inline-start: calc(-1 * (var(--_uia-timeline-space) + var(--_uia-timeline-year-size) / 2));
  z-index: -1;
}

[data-uia-timeline-skin="4"] .uia-timeline__year {
  box-sizing: border-box;
  flex: none;
  inline-size: var(--_uia-timeline-year-size);
  block-size: var(--_uia-timeline-year-size);

  border: var(--uia-timeline-year-line-thickness, var(--_uia-timeline-line-thickness)) var(--uia-timeline-year-line-style, solid) var(--uia-timeline-line-color, var(--_uia-timeline-line-color_default));
  border-radius: 50%;

  display: grid;
  place-items: center;
  background-color: var(--uia-timeline-year-background-color, #f0f0f0);

  font-size: var(--uia-timeline-year-font-size, .75rem);
  color: var(--uia-timeline-year-color, #222);
}

[data-uia-timeline-adapter-skin-4="uia-card-skin-#1"] {
  --uia-card-border-thickness: var(--uia-timeline-point-border-thickness, 3px);
  --uia-card-border-color: var(--uia-timeline-point-border-color, var(--_uia-timeline-line-color_default));
  --uia-card-background-color: var(--uia-timeline-point-background-color);
}

/*
SKIN 5
*/

[data-uia-timeline-skin="5"] {
  --_uia-timeline-line-color_default: #222;
  --_uia-timeline-line-thickness: var(--uia-timeline-line-thickness, 3px);
  --_uia-timeline-line-calculation: calc(var(--_uia-timeline-dot-size) / 2 - calc(var(--_uia-timeline-line-thickness) / 2));
  --_uia-timeline-line-position: var(--uia-timeline-line-position, 0px);

  --_uia-timeline-minimal-gap: var(--uia-timeline-minimal-gap, .5rem);
  --_uia-timeline-space: calc(var(--_uia-timeline-dot-size) + var(--_uia-timeline-dot-size) / 2 + var(--_uia-timeline-minimal-gap));

  --_uia-timeline-dot-size: var(--uia-timeline-dot-size, 1rem);
}

[data-uia-timeline-skin="5"] .uia-timeline__container {
  position: relative;
  padding-inline-start: var(--_uia-timeline-space);
}

[data-uia-timeline-skin="5"] .uia-timeline__line {
  border-inline-start: var(--_uia-timeline-line-thickness) solid var(--uia-timeline-line-color, var(--_uia-timeline-line-color_default));
  block-size: calc(100% - var(--_uia-timeline-line-position));

  position: absolute;
  inset-block-start: var(--_uia-timeline-line-position);
  inset-inline-start: var(--uia-timeline-line-main-position, var(--_uia-timeline-line-calculation));
}

[data-uia-timeline-skin="5"] .uia-timeline__group {
  position: relative;
  isolation: isolate;
}

[data-uia-timeline-skin="5"] .uia-timeline__dot {
  box-sizing: border-box;
  font-size: var(--_uia-timeline-dot-size);

  border-radius: 50%;
  border: .5em solid var(--uia-timeline-dot-color, var(--_uia-timeline-line-color_default));

  position: absolute;
  inset-block-start: var(--uia-timeline-dot-position, -1px);
}

[data-uia-timeline-skin="5"] .uia-timeline__group:last-child::after {
  content: "";
  inline-size: calc(var(--_uia-timeline-line-thickness) + var(--uia-timeline-line-mask-thickness, 4px));
  block-size: calc(100% - var(--_uia-timeline-line-position) - var(--_uia-timeline-dot-size) / 2);
  background-color: var(--uia-timeline-line-mask-color);
  position: absolute;
  inset-block-end: 0;
  transform: translate(-50%);
  z-index: -1;
}

[data-uia-timeline-skin="5"] {
  container-type: inline-size;
  container-name: timeline-skin-5;
}

@container timeline-skin-5 (min-width: 600px) {

  [data-uia-timeline-skin="5"] .uia-timeline__container {
    --uia-timeline-line-main-position: calc(50% - (var(--uia-timeline-line-thickness) / 2));
    --uia-timeline-dot-main-position: 50%;
    --_uia-timeline-space: 0;
  }

  [data-uia-timeline-skin="5"] .uia-timeline__point {
    max-inline-size: 45%;
  }

  [data-uia-timeline-skin="5"] .uia-timeline__group:nth-child(even) .uia-timeline__point {
    margin-inline-start: auto;
  }

  [data-uia-timeline-skin="5"] .uia-timeline__group:nth-child(odd) .uia-timeline__point {
    text-align: end;
  }

  [data-uia-timeline-skin="5"] .uia-timeline__dot {
    transform: translateX(-50%);
  }

  [data-uia-timeline-skin="5"] .uia-timeline__group:last-child::after {
    --_uia-timeline-line-mask-main-position: var(--uia-timeline-line-main-position);
  }
}

[data-uia-timeline-adapter-skin-5="uia-card"] {
  --uia-card-content-gap: var(--uia-timeline-content-gap, .5rem);
}

/*
=====
RESET
=====
*/

:where(.ra-link) {
  display: var(--ra-link-display, inline-flex);
}

:where(.ra-link[href]) {
  color: var(--ra-link-color, inherit);
  text-decoration: var(--ra-link-text-decoration, none);
}

:where(.ra-heading) {
  margin-block-start: var(--ra-heading-margin-block-start, 0);
  margin-block-end: var(--ra-heading-margin-block-end, 0);
}

/*
=====
HELPERS
=====
*/

.ha-screen-reader {
  width: var(--ha-screen-reader-width, 1px);
  height: var(--ha-screen-reader-height, 1px);
  padding: var(--ha-screen-reader-padding, 0);
  border: var(--ha-screen-reader-border, none);

  position: var(--ha-screen-reader-position, absolute);
  overflow: var(--ha-screen-reader-overflow, hidden);
}

/*
=====
UIA-CARD
=====
*/

.uia-card__container {
  display: var(--uia-card-display, grid);
  gap: var(--uia-card-content-gap);
}

.uia-card__time-divider::before {
  content: "—";
  margin-inline: var(--uia-card-time-divider-margin-inline, .15rem);
}

[data-uia-card-skin="1"] .uia-card__container {
  padding: var(--uia-card-padding, 1rem 1.75rem);
  background-color: var(--uia-card-background-color);
  border-radius: var(--uia-card-border-radius, 2px);
}

[data-uia-card-skin="1"] .uia-card__intro {
  display: grid;
  gap: var(--uia-card-intro-gap, 1rem);
}

[data-uia-card-skin="1"] .uia-card__time {
  grid-row: 1 / 1;
  inline-size: fit-content;
  padding: var(--uia-card-time-padding, .25rem 1.25rem .25rem);
  background-color: var(--uia-card-time-background-color, #f0f0f0);

  font-weight: var(--uia-card-time-font-weight, 700);
  font-size: var(--uia-card-time-font-size, .75rem);
  text-transform: var(--uia-card-time-text-transform, uppercase);
  color: var(--uia-card-time-color, currentColor);
}

[data-uia-card-skin="1"][data-uia-card-mod="1"] .uia-card__container {
  border-inline-start: var(--uia-card-border-thickness, 2px) var(--uia-card-border-style, solid) var(--uia-card-border-color, currentColor);
  box-shadow: var(--uia-card-box-shadow, 0 1px 3px 0 rgba(0, 0, 0, .12), 0 1px 2px 0 rgba(0, 0, 0, .24));
}

/*
=====
UIA-CONTROL
=====
*/

.uia-control__group {
  cursor: var(--uia-control-cursor, var(--_uia-control-cursor, pointer));
  line-height: var(--uia-control-line-height, 1);
}

.uia-control {
  --_uia-control-padding_default: 0;

  --_uia-control-border-width: var(--uia-control-border-width);
  --_uia-control-border-style: var(--uia-control-border-style, solid);
  --_uia-control-border-color: var(--uia-control-border-color, currentColor);

  --_uia-control-border: var(--_uia-control-border-width) var(--_uia-control-border-style) var(--_uia-control-border-color);
  --_uia-control-border-radius: var(--uia-control-border-radius, .25rem);
}

.uia-control__group {
  display: var(--uia-control-display, inline-flex);
  gap: var(--uia-control-gap, .5rem);

  padding: var(--_uia-control-padding);

  border: var(--_uia-control-border);
  border-radius: var(--_uia-control-border-radius);
}

/*
=====
TYPOGRAPHY
=====
*/

body {
  font-family: var(--ds-typography-main-font-family, system-ui);
  font-size: var(--ds-typography-main-font-size, 1rem);
  color: var(--ds-typography-main-color, #222);
  line-height: var(--ds-typography-main-line-height, 1.75);
}

p:not([class]) {
  margin-block: var(--ds-typography-paragraph-margin-block-start, var(--_ds-typography-main-margin)) 0;
}

/*
=====
DEMO
=====
*/

:root {
  --uia-timeline-line-color: #4557bb;
  --uia-timeline-dot-color: #4557bb;
  --uia-timeline-arrow-color: #4557bb;
  --uia-timeline-line-thickness: 3px;
  --uia-timeline-point-border-color: #4557bb;
  --uia-timeline-group-padding: 1.5rem 1.5rem 1.25rem;

  --ds-typography-main-line-height: 1.5;
}

.timeline-5-2 {
  --uia-timeline-line-mask-color: #f0f0f0
}

[data-uia-timeline-skin="3"] {
  --uia-timeline-year-background-color: #4557bb;
}

body {
  background-color: #f0f0f0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.page {
  box-sizing: border-box;
  inline-size: min(100%, 90ch);
  padding: 5rem 2rem 3rem;
  margin-inline: auto;
}

.linktr {
  --uia-control-background-color: rgb(209, 246, 255);
  --uia-control-border-radius: 2rem;
  --uia-control-padding: .75rem 1.5rem;
  --uia-control-border-width: 1px;
  --uia-control-border-color: rgb(209, 246, 255);

  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  text-align: center;
}

.linktr__goal {
  box-shadow: rgb(8 49 112 / 24%) 0 2px 8px 0;
}
</style>