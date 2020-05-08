<template>
  <div class="search-button">
    <nuxt-link :to="{path: 'result', query: setQuery}">
      <button>検索</button>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class SearchBotton extends Vue {
  get setQuery() {
    let query: {
      prefectures?: string;
      categoryIds?: string;
      featureIds?: string;
    } = {};
    if (this.$store.state.searchParams.prefectures.length > 0) {
      query[
        "prefectures"
      ] = this.$store.state.searchParams.prefectures.toString();
    }
    if (this.$store.state.searchParams.categoryIds.length > 0) {
      query[
        "categoryIds"
      ] = this.$store.state.searchParams.categoryIds.toString();
    }
    if (this.$store.state.searchParams.featureIds.length > 0) {
      query[
        "featureIds"
      ] = this.$store.state.searchParams.featureIds.toString();
    }
    return query;
  }
}
</script>

<style lang="scss" scoped>
</style>
