<template>
  <div class="area">
    <h1 class="area__title">エリア選択</h1>
    <div class="area__wrap">
      <select class="area__wrap__region" v-model="selected">
        <option
          class="area__wrap__region__option"
          v-for="(area, key, index) in areaData"
          :key="index"
          :value="{selectId: key}"
        >{{area.name}}</option>
      </select>
      <div class="area__wrap__prefecture" v-if="selected.selectId !== '2'">
        <div
          class="area__wrap__prefecture__content"
          v-for="(prefecture, index) in areaData[selected.selectId].prefectures"
          :key="index"
        >
          <input
            class="area__wrap__prefecture__content__checkbox"
            type="checkbox"
            :id="prefecture.prefectureId"
          />
          <label
            class="area__wrap__prefecture__content__label"
            :for="prefecture.prefectureId"
          >{{prefecture.name}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Area extends Vue {
  get areaData() {
    return this.$store.state.areaData;
  }
  selected = { selectId: 0 };
}
</script>

<style lang="scss" scoped>
.area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  &__title {
    font-size: 20px;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__region {
      margin: 10px;
    }
    &__prefecture {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      &__content {
        display: flex;
        align-items: center;
        margin: 0 10px;
        &__checkbox {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
