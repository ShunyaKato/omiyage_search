<template>
  <div class="price">
    <h1 class="price__title">値段</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Price extends Vue {}
</script>

<style lang="scss" scoped>
.price {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 20px;
  }
}
</style>
