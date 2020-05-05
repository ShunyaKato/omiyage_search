<template>
  <div class="feature">
    <h1 class="feature__title">こだわり</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Feature extends Vue {}
</script>

<style lang="scss" scoped>
.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 20px;
  }
}
</style>
