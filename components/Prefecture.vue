<template>
  <div class="prefecture">
    <h1 class="prefecture__title">エリア選択</h1>
    <div class="prefecture__wrap">
      <select @change="changeCurrentId()">
        <option>地域を選択してください</option>
        <option v-for="(region, index) in regions" :key="index">{{region.name}}</option>
      </select>
      <p>{{region}}</p>
      <div v-for="(prefecture, index) in regions[currentId].prefectures" :key="index">
        <input class="prefecture__wrap__checkbox" type="checkbox" :id="prefecture.prefectureId" />
        <label class="prefecture__wrap__label" :for="prefecture.prefectureId">{{prefecture.name}}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { regions } from "~/constants/region.ts";

@Component({})
export default class Prefecture extends Vue {
  regions = regions;
  region = "";
  // prefectures = regions[].prefectures;
  // prefectures = regions["3"].prefectures;
  currentId = 1;
  changeCurrentId() {
    // const changeId = this.regions.
    console.log("run");
    console.log(this.regions);
    // this.currentId = regionId;
    console.log("---currentId---");
    console.log(this.currentId);
  }
}
</script>

<style lang="scss" scoped>
.prefecture {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
    font-size: 20px;
  }
  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    &__checkbox {
      margin-right: 5px;
    }
  }
}
</style>