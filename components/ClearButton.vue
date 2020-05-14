<template>
  <div class="clear">
    <button class="clear__button" @click="clearChecked(keyName)">クリア</button>
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
.clear {
  margin-top: 5px;
  &__button {
    background-color: rgba(39, 39, 39, 0.5);
    color: #effffb;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 12px;
  }
}
</style>