<template>
  <div class="search">
    <Area />
    <Cost />
    <GoodsType />
    <Characteristics />
    <SearchButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    Area: () => import("~/components/Area.vue"),
    Cost: () => import("~/components/Cost.vue"),
    GoodsType: () => import("~/components/GoodsType.vue"),
    Characteristics: () => import("~/components/Characteristics.vue"),
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
