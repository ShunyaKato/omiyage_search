<template>
  <div class="cost">
    <h1 class="cost__title">値段</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Cost extends Vue {}
</script>

<style lang="scss" scoped>
.cost {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 20px;
  }
}
</style>
