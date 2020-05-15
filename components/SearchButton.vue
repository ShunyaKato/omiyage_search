<template>
  <div class="search-button">
    <nuxt-link class="search-button__content" :to="{path: 'result', query: setQuery}">検索</nuxt-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class SearchBotton extends Vue {
  get setQuery() {
    interface queryType {
      region?: string;
      prefectures?: string;
      categoryIds?: string;
      featureIds?: string;
    }
    let query: queryType = {};
    if (this.$store.state.searchParams.region > 1) {
      query.region = this.$store.state.searchParams.region;
    }
    if (this.$store.state.searchParams.prefectures.length > 0) {
      query.prefectures = this.$store.state.searchParams.prefectures.toString();
    }
    if (this.$store.state.searchParams.categoryIds.length > 0) {
      query.categoryIds = this.$store.state.searchParams.categoryIds.toString();
    }
    if (this.$store.state.searchParams.featureIds.length > 0) {
      query.featureIds = this.$store.state.searchParams.featureIds.toString();
    }
    return query;
  }
}
</script>

<style lang="scss" scoped>
.search-button {
  margin: 10px 0;
  &__content {
    font-size: 24px;
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 2px;
    text-decoration: none;
    background-color: #4f98ca;
    padding: 9px 30px;
    border-radius: 20px;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
