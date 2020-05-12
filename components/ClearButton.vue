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
  &__button {
    background-color: rgba(39, 39, 39, 0.5);
    color: #effffb;
    border: none;
    border-radius: 8px;
    font-weight: bold;
  }
}
</style>