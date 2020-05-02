<template>
  <div class="goods-type">
    <h1 class="goods-type__title">種類</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class GoodsType extends Vue {}
</script>

<style lang="scss" scoped>
.goods-type {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 20px;
  }
}
</style>
