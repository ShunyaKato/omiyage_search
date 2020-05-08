<template>
  <div class="search-button">
    <nuxt-link
      :to="{path: 'result', query: {prefectures: prefectureParams, categoryIds: categoryParams, featureIds: featureParams}}"
    >
      <button>検索</button>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class SearchBotton extends Vue {
  get prefectureParams(): string {
    return this.$store.state.searchParams.prefectures.toString();
  }

  get categoryParams() {
    return this.$store.state.searchParams.categoryIds.toString();
  }

  get featureParams() {
    return this.$store.state.searchParams.featureIds.toString();
  }
}
</script>

<style lang="scss" scoped>
</style>
