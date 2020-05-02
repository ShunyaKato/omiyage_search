<template>
  <div class="characteristic">
    <h1 class="characteristic__title">こだわり</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Characteristic extends Vue {}
</script>

<style lang="scss" scoped>
.characteristic {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 20px;
  }
}
</style>