<template>
  <div class="feature">
    <h1 class="feature__title">こだわり</h1>
    <div class="feature__wrap">
      <div class="feature__wrap__content" v-for="(feature, index) in featureData" :key="index">
        <input class="feature__wrap__content__checkbox" type="checkbox" :id="feature.featureId" />
        <label class="feature__wrap__content__label" :for="feature.featureId">{{feature.name}}</label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Feature extends Vue {
  get featureData() {
    return this.$store.state.featureData;
  }
}
</script>

<style lang="scss" scoped>
.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 20px;
  }
  &__wrap {
    display: flex;
    align-items: center;
    &__content {
      margin: 0 5px;
      display: flex;
      align-items: center;
      &__checkbox {
        margin-right: 3px;
      }
    }
  }
}
</style>
