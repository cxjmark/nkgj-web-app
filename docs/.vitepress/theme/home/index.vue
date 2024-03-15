<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import BaseWaves from './BaseWaves.vue'
import BaseDemoEditor from './BaseDemoEditor.vue'
</script>

<template>
  <div class="tw-h-full tw-pt-[24px] home">
    <BaseIcon />
    <div class="">
      <section id="docs" class="tw-text-center">
        <BaseWaves />
        <div class="tagline">
          <div class="accent">Welcome To Niuku</div>
          <div class="accent">Web Docs</div>
        </div>
        <p class="tw-py-3"> </p>
      </section>
      <section id="highlights" class="vt-box-container tw-px-3">
        <div class="vt-box">
          <div class="tw-mb-3 tw-text-[20px] tw-font-semibold tw-tracking-[-0.4px]">🛸 Vue/React 的 Hooks</div>
          <div class="tw-text-[15px] tw-font-normal">
            基础和高级的 hook， 高性能逻辑的抽象封装，满足大量场景。
          </div>
        </div>
        <div class="vt-box">
          <div class="tw-mb-3 tw-text-[20px] tw-font-semibold tw-tracking-[-0.4px]">🏄🏼‍♂️ 简洁易用</div>
          <div class="tw-text-[15px] tw-font-normal">
            简洁的语法和易用的特性，轻松上手，详细的文档。
          </div>
        </div>
        <div class="vt-box">
          <div class="tw-mb-3 tw-text-[20px] tw-font-semibold tw-tracking-[-0.4px]">🎯 TypeScript</div>
          <div class="tw-text-[15px] tw-font-normal">
            使用 TypeScript 构建，提供完整的类型定义文件，安全严谨。
          </div>
        </div>
        <div class="vt-box">
          <div class="tw-mb-3 tw-text-[20px] tw-font-semibold tw-tracking-[-0.4px]">🎪 交互式demo演示</div>
          <div class="tw-text-[15px] tw-font-normal">
            眼见为实，身临其境。
          </div>
        </div>
        <div class="vt-box">
          <div class="tw-mb-3 tw-text-[20px] tw-font-semibold tw-tracking-[-0.4px]">🧩 按需加载</div>
          <div class="tw-text-[15px] tw-font-normal">
            拿你想要，包体积更小。
          </div>
        </div>
        <div class="vt-box">
          <div class="tw-mb-3 tw-text-[20px] tw-font-semibold tw-tracking-[-0.4px]">🔐 安全性</div>
          <div class="tw-text-[15px] tw-font-normal">
            测试完善，安全可靠。
          </div>
        </div>
      </section>
    </div>
    <BaseDemoEditor class="tw-max-w-[960px] tw-w-[960px] tw-mx-auto tw-px-3">
      <div class="demo-name">
        Demo.vue
      </div>
    </BaseDemoEditor>
  </div>
</template>

<style scoped lang="scss">
.demo-name {
  opacity: 0.5;
  text-align: center;
}

.tagline {
  font-size: 66px;
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0 auto;
  background: -webkit-linear-gradient(315deg, var(--vp-c-primay) 25%, var(--vp-c-primay-2));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#docs {
  padding: 0 32px 32px 32px;
}
section {
  position: relative;
  background: url(/grid.svg);
}
#highlights {
  max-width: 960px;
  margin: 0 auto;
  color: var(--vt-c-text-2);
}
#highlights p {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}
#highlights p {
  font-weight: 400;
  font-size: 15px;
}
#highlights .vt-box {
  background-color: var(--vp-func-bg);
  margin-top: 16px;
}
@media (max-width: 370px) {
  .tagline {
    font-size: 26px;
  }
  .accent {
    font-size: 36px;
  }
}
@media (max-width: 768px) {
  .vt-box-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .vt-box-container .vt-box {
    background-color: var(--vt-c-bg-soft);
    transition: color 0.5s, background-color 0.5s;
    padding: 28px 36px;
    border-radius: 8px;
    flex: 0 100%;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 500;
  }
}

@media (min-width: 769px) {
  .vt-box-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .vt-box-container .vt-box {
    background-color: var(--vt-c-bg-soft);
    transition: color 0.5s, background-color 0.5s;
    padding: 28px 28px;
    border-radius: 8px;
    flex: 0 32%;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>