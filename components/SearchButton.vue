<template>
  <div class="search-button">
    <nuxt-link
      :to="{path: 'result', query: {prefectures: prefectureParams, categoryIds: categoryParams}}"
    >
      <button>検索</button>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class SearchBotton extends Vue {
  get searchParams() {
    return this.$store.state.searchParams;
  }

  get prefectureParams() {
    return this.searchParams.prefectures.toString();
  }

  get categoryParams() {
    return this.searchParams.categoryIds.toString();
  }
}
</script>

<style lang="scss" scoped>
</style>
