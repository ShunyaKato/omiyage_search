<template>
  <div>
    <button @click="clearChecked(keyName)">クリア</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class Clear extends Vue {
  @Prop()
  keyName!: string;

  clearChecked(keyName: string) {
    this.$store.commit("clearSearchParams", keyName);
  }
}
</script>

<style lang="scss" scoped>
</style>