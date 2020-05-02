<template>
  <div class="category">
    <h1 class="category__title">種類</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Category extends Vue {}
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 20px;
  }
}
</style>
