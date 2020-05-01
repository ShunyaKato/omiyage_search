<template>
  <div class="container">
    <Main />
    <Search />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    Main: () => import("~/components/Main.vue"),
    Search: () => import("~/components/Search.vue")
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>
