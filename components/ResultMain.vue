<template>
  <div class="result-main">
    <h1 class="result-main__title">検索結果</h1>
    <div class="result-main__conditions">
      <p class="result-main__conditions__text">検索条件</p>
      <ul class="result-main__conditions__lists">
        <li
          class="result-main__conditions__lists__list"
          v-for="(prefectureId, index) in setPrefectureArray"
          :key="`prefecture-${index}`"
        >{{getPrefectureTag(prefectureId)}}</li>
        <li
          class="result-main__conditions__lists__list"
          v-for="(categoryId, index) in setCategoryArray"
          :key="`category-${index}`"
        >{{getCategoryTag(categoryId)}}</li>
        <li
          class="result-main__conditions__lists__list"
          v-for="(featureId, index) in setFeatureArray"
          :key="`feature-${index}`"
        >{{getFeatureTag(featureId)}}</li>
      </ul>
    </div>
    <div class="result-main__counts">
      <p class="result-main__counts__text">ヒット数{{resultItem.length}}</p>
    </div>
    <div class="result-main__wrap">
      <div
        class="result-main__wrap__content"
        v-for="(resultItem, index) in resultItem"
        :key="index"
      >
        <a class="result-main__wrap__content__link" :href="resultItem.url">
          <img class="result-main__wrap__content__link__image" :src="resultItem.image_url" />
        </a>
        <p class="result-main__wrap__content__name">{{resultItem.name}}</p>
        <p class="result-main__wrap__content__price">{{resultItem.price}}</p>
        <div class="result-main__wrap__content__tags">
          <div class="result-main__wrap__content__tags__tag">タグ</div>
        </div>
      </div>
    </div>
    <div class="result-main__none">
      <p class="result-main__none__text">
        該当の商品がありません。
        <br />条件を変えてもう一度お試し下さい。
      </p>
      <nuxt-link to="/" class="result-main__none__link">
        <button class="result-main__none__link__button">条件を変えて検索</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import {
  getPrefectureTag,
  getCategoryTag,
  getFeatureTag
} from "~/modules/index.ts";
import _ from "lodash";

@Component
export default class ResultMain extends Vue {
  get setPrefectureArray(): number[] {
    let prefectureArray: number[] = [];
    if (typeof this.$route.query.prefectures === "string") {
      prefectureArray = this.$route.query.prefectures.split(",").map(Number);
    }
    return prefectureArray;
  }

  get setCategoryArray(): number[] {
    let categoryArray: number[] = [];
    if (typeof this.$route.query.categoryIds === "string") {
      categoryArray = this.$route.query.categoryIds.split(",").map(Number);
    }
    return categoryArray;
  }

  get setFeatureArray(): number[] {
    let featureArray: number[] = [];
    if (typeof this.$route.query.featureIds === "string") {
      featureArray = this.$route.query.featureIds.split(",").map(Number);
    }
    return featureArray;
  }

  get resultItem() {
    let resultItem = [];
    resultItem = _.filter(this.$store.state.itemData, item => {
      // prefectureArrayがない時は全てreturn
      if (this.setPrefectureArray.length === 0) {
        return item;
      }
      let isMach = false; // setPrefectureArrayがitem.prefectureIdsに含まれるかどうか
      if (this.setPrefectureArray.includes(item.prefectureId) === true) {
        isMach = true;
      }
      if (isMach) {
        return item;
      }
    });
    resultItem = _.filter(resultItem, item => {
      // categoryArrayがない時は全てreturn
      if (this.setCategoryArray.length === 0) {
        return item;
      }
      let isMach = false; // setCategoryArrayがitem.categoryIdsに含まれるかどうか
      _.each(this.setCategoryArray, categoryId => {
        if (item.categoryIds.includes(categoryId) === true) {
          isMach = true;
        }
      });
      if (isMach) {
        return item;
      }
    });
    resultItem = _.filter(resultItem, item => {
      // featureArrayがない時は全てreturn
      if (this.setFeatureArray.length === 0) {
        return item;
      }
      let isMach = false; // setFeatureArrayがitem.featureIdsに含まれるかどうか
      _.each(this.setFeatureArray, featureId => {
        if (item.featureIds.includes(featureId) === true) {
          isMach = true;
        }
      });
      if (isMach) {
        return item;
      }
    });
    return resultItem;
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
.result-main {
  background-color: #effffb;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__title {
    font-size: 40px;
  }
  &__conditions {
    margin: 20px 0;
    &__text {
      font-size: 20px;
    }
  }
  &__counts {
    margin: 20px 0;
    &__text {
      font-size: 20px;
    }
  }
  &__wrap {
    margin: 20px 0;
    display: flex;
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 10px;
      &__link {
        &__image {
          width: 300px;
          height: 300px;
          background-color: blue;
        }
      }
      &__name {
        margin: 10px 0 3px;
        font-size: 20px;
      }
      &__price {
        font-size: 18px;
        margin-bottom: 3px;
      }
    }
  }
  &__none {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__text {
      font-size: 30px;
    }
    &__link {
      &__button {
        font-size: 20px;
      }
    }
  }
}
</style>
