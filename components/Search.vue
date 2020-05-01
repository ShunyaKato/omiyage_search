<template>
  <div class="search">
    <Area />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    Area: () => import("~/components/Area.vue")
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
}
</style>