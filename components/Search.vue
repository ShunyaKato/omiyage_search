<template>
  <div class="search">
    <div class="search__wrap">
      <Area />
      <div class="search__wrap__line"></div>
      <Category />
      <div class="search__wrap__line"></div>
      <Feature />
    </div>
    <SearchButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    Area: () => import("~/components/Area.vue"),
    Category: () => import("~/components/Category.vue"),
    Feature: () => import("~/components/Feature.vue"),
    SearchButton: () => import("~/components/SearchButton.vue")
  }
})
export default class Search extends Vue {}
</script>

<style lang="scss" scoped>
.search {
  background-color: #effffb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__wrap {
    width: 533px;
    height: 330px;
    border: 5px solid #50d890;
    display: flex;
    margin: 30px 0;
    border-radius: 20px;
    &__line {
      width: 5px;
      margin: 10px 0;
      border-radius: 2.5px;
      background-color: #50d890;
    }
  }
}
</style>
