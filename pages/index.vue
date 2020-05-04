<template>
  <div class="index">
    <Main />
    <Search />
    <Recommend />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    Main: () => import("~/components/Main.vue"),
    Search: () => import("~/components/Search.vue"),
    Recommend: () => import("~/components/Recommend.vue")
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>

