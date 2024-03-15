<template>
  <div class="container">
    <div class="img"> </div>
    <img src="/logo.svg" alt="icon" />
  </div>
</template>

<script setup lang="ts">
import { imageBase64 } from './iconBase64'
</script>

<style scoped lang="scss">
.container {
  @apply tw-flex tw-flex-col tw-items-center tw-p-[32px] tw-pt-[80px] tw-relative tw-my-0 tw-mx-auto;
}
.img {
  background-image: linear-gradient(-25deg, var(--vp-c-primay) 40%, var(--vp-c-primay-2) 50%);
  @apply tw-absolute tw-w-[260px] tw-h-[260px] tw-rounded-full tw-left-[50%] tw-top-[50%] tw-blur-[60px];
  transform: translate(-50%, -50%);
}

img {
  @apply tw-w-[260px] tw-h-[230px] tw-z-10;
}
@media (max-width: 1450px) {
  .img {
    @apply tw-w-[216px] tw-h-[192px] tw-blur-[60px];
  }
  img {
    @apply tw-w-[216px] tw-h-[192px];
  }
}
@media (max-width: 1100px) {
  .img {
    @apply tw-w-[173px] tw-h-[154px] tw-blur-[60px];
  }
  img {
    @apply tw-w-[173px] tw-h-[154px];
  }
}
@media (max-width: 768px) {
  .container {
    @apply tw-flex tw-flex-col tw-items-center;
    padding: 16px;
    padding-top: 32px;
  }

  .img {
    @apply tw-w-[131px] tw-h-[115px] tw-blur-[40px];

  }

  img {
    @apply tw-w-[131px] tw-h-[115px];
  }
}
@media (max-width: 370px) {
  .container {
    @apply tw-flex tw-flex-col tw-items-center;
    padding: 8px;
  }

  .img {
    @apply tw-w-[87px] tw-h-[77px] tw-blur-[30px];
  }

  img {
    @apply tw-w-[87px] tw-h-[77px];
  }
}
</style>
