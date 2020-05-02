<template>
  <div class="search">
    <Area />
    <Price />
    <Category />
    <Feature />
    <SearchButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    Area: () => import("~/components/Area.vue"),
    Price: () => import("~/components/Price.vue"),
    Category: () => import("~/components/Category.vue"),
    Feature: () => import("~/components/Feature.vue"),
    SearchButton: () => import("~/components/SearchButton.vue")
  }
})
export default class Search extends Vue {}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #effffb;
}
</style>
