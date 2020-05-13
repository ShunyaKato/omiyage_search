<template>
  <div class="area">
    <h1 class="area__title">エリア選択</h1>
    <ClearButton :keyName="'prefectures'" />
    <div class="area__wrap">
      <div class="area__wrap__region">
        <select
          class="area__wrap__region__select"
          v-model="selected"
          @change="updateRegionParams(selected.selectId)"
        >
          <option
            class="area__wrap__region__select__option"
            v-for="(area, key, index) in areaData"
            :key="index"
            :value="{selectId: key}"
            :selected="isSelected(selected.selectId)"
          >{{area.name}}</option>
        </select>
      </div>
      <div class="area__wrap__prefecture" v-if="selected.selectId !== '2'">
        <div
          class="area__wrap__prefecture__content"
          v-for="(prefecture, index) in areaData[selected.selectId].prefectures"
          :key="index"
        >
          <input
            name="prefecture"
            class="area__wrap__prefecture__content__checkbox"
            type="checkbox"
            :id="`prefectureIds:${prefecture.prefectureId}`"
            @change="updatePrefectureParams(prefecture.prefectureId)"
            :checked="isChecked(prefecture.prefectureId)"
          />
          <label
            class="area__wrap__prefecture__content__label"
            :for="`prefectureIds:${prefecture.prefectureId}`"
          >{{prefecture.name}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    ClearButton: () => import("~/components/ClearButton.vue")
  }
})
export default class Area extends Vue {
  get areaData() {
    return this.$store.state.areaData;
  }

  isSelected(regionId: string) {
    if (this.$store.state.searchParams.region === regionId) {
      return "selected";
    }
  }

  isChecked(prefectureId: number) {
    if (this.$store.state.searchParams.prefectures.includes(prefectureId)) {
      return "checked";
    }
  }

  selected = { selectId: this.$store.state.searchParams.region };

  updateRegionParams(regionId: string) {
    //全国を選択した場合チェックをクリアにする
    if (regionId === "1") {
      this.$store.commit("clearSearchParams", "prefectures");
    }
    this.$store.dispatch("updateRegionParams", regionId);
    this.$store.commit("clearPrefectureParams");
  }

  updatePrefectureParams(prefectureId: number) {
    this.$store.dispatch("updatePrefectureParams", prefectureId);
  }
}
</script>

<style lang="scss" scoped>
.area {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  position: relative;
  width: 171px;
  &__title {
    font-size: 20px;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    &__region {
      border: 1px solid #bbbbbb;
      border-radius: 2px;
      background: #ffffff;
      position: relative;
      display: flex;
      align-items: center;
      &::before {
        position: absolute;
        top: 0.55em;
        right: 0.35em;
        width: 0;
        height: 0;
        padding: 0;
        content: "";
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #666666;
        pointer-events: none;
      }
      &::after {
        position: absolute;
        top: 0;
        right: 1.5em;
        bottom: 0;
        width: 1px;
        content: "";
        border-left: 1px solid #bbbbbb;
      }
      &__select {
        width: 100%;
        padding: 3px 30px 3px 5px;
        background: transparent;
        outline: none;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        &::-ms-expand {
          display: none;
        }
        &:-moz-focusring {
          color: transparent;
          text-shadow: 0 0 0 #000000;
        }
      }
    }
    &__prefecture {
      display: flex;
      flex-direction: column;
      // flex-wrap: wrap;
      // align-items: center;
      &__content {
        display: flex;
        align-items: center;
        margin: 0 5px;
        &__checkbox {
          margin-right: 3px;
        }
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .area {
    width: auto;
    &__wrap {
      &__prefecture {
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        padding-top: 7px;
      }
    }
  }
}
</style>
