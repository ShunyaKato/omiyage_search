<template>
  <div class="search-button">
    <nuxt-link to="/result">
      <button>検索</button>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class SearchBotton extends Vue {}
</script>

<style lang="scss" scoped>
</style>
