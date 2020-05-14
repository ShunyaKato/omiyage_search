<template>
  <div class="tag">
    <div class="tag__wrap">
      <p class="tag__wrap__prefecture tag__icon">#{{getPrefectureTag(itemData[0].prefectureId)}}</p>
      <p
        class="tag__wrap__category tag__icon"
        v-for="(categoryId, index) in itemData[0].categoryIds"
        :key="`first-${index}`"
      >#{{getCategoryTag(categoryId)}}</p>
      <p
        class="tag__wrap__feature tag__icon"
        v-for="(featureId, index) in itemData[0].featureIds"
        :key="`second-${index}`"
      >#{{getFeatureTag(featureId)}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import {
  getPrefectureTag,
  getCategoryTag,
  getFeatureTag
} from "~/modules/index.ts";
import _ from "lodash";

@Component
export default class Tag extends Vue {
  @Prop()
  itemId!: number;

  get itemData() {
    const itemData = _.filter(this.$store.state.itemData, { id: this.itemId });
    return itemData;
  }

  getPrefectureTag(prefectureId: number) {
    return getPrefectureTag(this.$store.state.prefectureData, prefectureId);
  }

  getCategoryTag(categoryId: number) {
    return getCategoryTag(this.$store.state.categoryData, categoryId);
  }

  getFeatureTag(featureId: number) {
    return getFeatureTag(this.$store.state.featureData, featureId);
  }
}
</script>

<style lang="scss" scoped>
.tag {
  &__wrap {
    display: flex;
    flex-wrap: wrap;
  }
  &__icon {
    background-color: #4f98ca;
    border-radius: 15px;
    padding: 0 5px;
    margin: 3px 5px 3px 0;
    color: #ffffff;
  }
}
</style>
