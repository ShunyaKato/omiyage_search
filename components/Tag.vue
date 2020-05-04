<template>
  <div class="tag">
    <p>{{index}}</p>
    <div class="tag__wrap">
      <p class="tag__wrap__prefecture">{{itemData[index].prefectureId}}</p>
      <p>{{getPrefecture(itemData[index].prefectureId)}}</p>
      <p
        v-for="(categoryId, index) in itemData[index].categoryIds"
        :key="index"
      >{{getCategory(categoryId)}}</p>
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

  getPrefecture(prefectureId: number) {
    const prefecture: { name: string; prefectureId: number }[] = _.filter(
      this.$store.state.prefectureData,
      {
        prefectureId: prefectureId
      }
    );
    return prefecture[0].name;
  }

  getCategory(categoryId: number) {
    const category: { categoryId: number; name: string }[] = _.filter(
      this.$store.state.categoryData,
      {
        categoryId: categoryId
      }
    );
    return category[0].name;
  }
}
</script>

<style lang="scss" scoped>
.tag {
  font-size: 100px;
}
</style>
