<template>
  <div class="result-main">
    <h1 class="result-main__title">検索結果</h1>
    <nuxt-link to="/" class="result-main__back">
      <font-awesome-icon class="result-main__back__icon" icon="angle-double-left" />
      <p class="result-main__back__text">戻る</p>
    </nuxt-link>
    <div class="result-main__conditions">
      <p class="result-main__conditions__text">検索条件</p>
      <ul class="result-main__conditions__lists">
        <li
          class="result-main__conditions__lists__list"
          v-if="!$route.query.region && !$route.query.prefectures"
        >全国</li>
        <li
          class="result-main__conditions__lists__list"
          v-if="$route.query.region && !$route.query.prefectures"
        >{{regionName($route.query.region)}}</li>
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
      <p class="result-main__counts__text">検索結果：{{resultItem.length}}件</p>
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
        <Tag :itemId="resultItem.id" />
      </div>
    </div>
    <div class="result-main__none" v-if="resultItem.length === 0">
      <p class="result-main__none__text">
        該当の商品がありません。
        <br />条件を変えてお試し下さい。
      </p>
      <nuxt-link to="/" class="result-main__none__link">条件を変えて検索</nuxt-link>
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

@Component({
  components: {
    Tag: () => import("~/components/Tag.vue")
  }
})
export default class ResultMain extends Vue {
  regionName(regionId: string) {
    return this.$store.state.areaData[regionId].name;
  }

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
      // regionがない時は全てreturn
      const regionId = this.$route.query.region;
      if (!regionId) {
        return item;
      }
      // regionがitem.regionに含まれるかどうか
      if (
        typeof regionId === "string" &&
        parseInt(regionId, 10) === item.region
      ) {
        return item;
      }
    });
    resultItem = _.filter(resultItem, item => {
      // prefectureArrayがない時は全てreturn
      if (this.setPrefectureArray.length === 0) {
        return item;
      }
      // setPrefectureArrayにitem.prefectureIdsが含まれるかどうか
      if (this.setPrefectureArray.includes(item.prefectureId) === true) {
        return item;
      }
    });
    resultItem = _.filter(resultItem, item => {
      // categoryArrayがない時は全てreturn
      if (this.setCategoryArray.length === 0) {
        return item;
      }
      // setCategoryArrayにitem.CategoryIdsが含まれるかどうか
      if (this.setCategoryArray.includes(item.categoryIds) === true) {
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
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  &__back {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000000;
    &__icon {
      font-size: 20px;
      padding-right: 5px;
    }
    &__text {
      font-size: 16px;
    }
  }
  &__title {
    font-size: 40px;
  }
  &__conditions {
    margin: 20px 0;
    &__text {
      font-size: 20px;
      text-align: center;
    }
    &__lists {
      padding: 0;
      display: flex;
      justify-content: center;
      &__list {
        margin: 0 3px;
      }
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
    flex-wrap: wrap;
    justify-content: center;
    &__content {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: 20px 10px;
      width: 300px;
      &__link {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        &__image {
          max-width: 100%;
          max-height: 100%;
        }
      }
      &__name {
        margin: 10px 0 3px;
        font-size: 20px;
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
      text-align: center;
    }
    &__link {
      font-size: 24px;
      color: #ffffff;
      font-weight: bold;
      letter-spacing: 2px;
      text-decoration: none;
      background-color: #4f98ca;
      padding: 9px 30px;
      border-radius: 20px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .result-main {
    &__title {
      font-size: 30px;
    }
    &__wrap {
      flex-direction: column;
      &__content {
        width: 200px;
        &__link {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          &__image {
            max-width: 100%;
            max-height: 200px;
          }
        }
        &__name {
          font-size: 16px;
        }
        &__price {
          font-size: 16px;
        }
      }
    }
    &__none {
      &__text {
        font-size: 22px;
      }
      &__link {
        font-size: 20px;
      }
    }
  }
}

// @media screen and (max-width: 680px) {
//   .result-main {
//     &__wrap {
//       &__content {
//         &__link {
//           height: auto;
//           &__image {
//             max-height: 200px;
//           }
//         }
//       }
//     }
//   }
// }
</style>
