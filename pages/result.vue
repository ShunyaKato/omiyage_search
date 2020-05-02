<template>
  <div class="result">
    <ResultMain />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    ResultMain: () => import("~/components/ResultMain.vue")
  }
})
export default class Result extends Vue {}
</script>

<style lang="scss" scoped>
</style>
