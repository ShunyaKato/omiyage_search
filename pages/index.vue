<template>
  <div class="container">
    <Main />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    Main: () => import("~/components/Main.vue")
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>
