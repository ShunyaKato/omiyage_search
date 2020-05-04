<template>
  <div class="tag">
    <p>{{index}}</p>
    <div class="tag__wrap">
      <p class="tag__wrap__prefecture">{{itemData[index].prefectureId}}</p>
      <p>{{getPrefecture(itemData[index].prefectureId)}}</p>
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

  // get prefectureData() {
  //   return this.$store.state.prefectureData;
  // }

  getPrefecture(prefectureId: number) {
    console.log(prefectureId);
    console.log(typeof prefectureId);
    const prefecture: { name: string; prefectureId: number }[] = _.filter(
      this.$store.state.prefectureData,
      {
        prefectureId: prefectureId
      }
    );
    return prefecture[0].name;
  }
}
</script>

<style lang="scss" scoped>
.tag {
  font-size: 100px;
}
</style>
