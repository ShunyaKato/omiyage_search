<template>
  <div class="tag">
    <div class="tag__wrap">
      <nuxt-link
        class="tag__wrap__content"
        :to="{path: 'result', query: setPrefectureQuery(itemData[0])}"
      >
        <p
          class="tag__wrap__content__prefecture tag__icon"
        >#{{getPrefectureTag(itemData[0].prefectureId)}}</p>
      </nuxt-link>
      <nuxt-link
        class="tag__wrap__content"
        :to="{path: 'result', query: setCategoryQuery(itemData[0])}"
      >
        <p
          class="tag__wrap__content__category tag__icon"
        >#{{getCategoryTag(itemData[0].categoryIds)}}</p>
      </nuxt-link>
      <nuxt-link
        class="tag__wrap__content"
        :to="{path: 'result', query: setFeatureQuery(featureId)}"
        v-for="(featureId, index) in itemData[0].featureIds"
        :key="index"
      >
        <p class="tag__wrap__content__feature tag__icon">#{{getFeatureTag(featureId)}}</p>
      </nuxt-link>
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

  setPrefectureQuery(itemData: any) {
    interface queryType {
      region?: string;
      prefectures?: string;
    }
    let query: queryType = {};
    query.region = itemData.region.toString();
    query.prefectures = itemData.prefectureId.toString();
    return query;
  }

  setCategoryQuery(itemData: any) {
    interface queryType {
      categoryIds?: string;
    }
    let query: queryType = {};
    query.categoryIds = itemData.categoryIds.toString();
    return query;
  }

  setFeatureQuery(featureId: number) {
    interface queryType {
      featureIds?: string;
    }
    let query: queryType = {};
    query.featureIds = featureId.toString();
    return query;
  }
}
</script>

<style lang="scss" scoped>
.tag {
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    &__content {
      display: block;
    }
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
