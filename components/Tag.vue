<template>
  <div class="tag">
    <div class="tag__wrap">
      <p class="tag__wrap__prefecture tag__icon">#{{getPrefectureTag(itemData[index].prefectureId)}}</p>
      <p
        class="tag__wrap__category tag__icon"
        v-for="(categoryId, index) in itemData[index].categoryIds"
        :key="index"
      >#{{getCategoryTag(categoryId)}}</p>
      <p
        class="tag__wrap__feature tag__icon"
        v-for="(featureId, index) in itemData[index].featureIds"
        :key="index"
      >#{{getFeatureTag(featureId)}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import _ from "lodash";

@Component
export default class Tag extends Vue {
  @Prop()
  index!: number;

  get itemData() {
    return this.$store.state.itemData;
  }

  get areaData() {
    return this.$store.state.areaData;
  }

  getPrefectureTag(prefectureId: number) {
    const prefecture: { name: string; prefectureId: number }[] = _.filter(
      this.$store.state.prefectureData,
      {
        prefectureId: prefectureId
      }
    );
    return prefecture[0].name;
  }

  getCategoryTag(categoryId: number) {
    const category: { categoryId: number; name: string }[] = _.filter(
      this.$store.state.categoryData,
      {
        categoryId: categoryId
      }
    );
    return category[0].name;
  }

  getFeatureTag(featureId: number) {
    const feature: { featureId: number; name: string }[] = _.filter(
      this.$store.state.featureData,
      {
        featureId: featureId
      }
    );
    return feature[0].name;
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
