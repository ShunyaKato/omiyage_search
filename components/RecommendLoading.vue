<template>
  <div class="recommend-loading">
    <swiper class="recommend-loading__wrap" :options="swiperOption">
      <swiper-slide
        class="recommend-loading__wrap__content"
        v-for="(itemData, index) in randomRecommendItem"
        :key="index"
      >
        <div class="recommend-loading__wrap__content__image loading"></div>
        <div class="recommend-loading__wrap__content__name loading"></div>
        <div class="recommend-loading__wrap__content__tag loading"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Recommend extends Vue {
  get itemData() {
    return this.$store.state.itemData;
  }

  get randomRecommendItem() {
    const copyItemData = this.$store.state.itemData.concat();
    let dataLength = copyItemData.length;
    const recommendItem = [];
    for (let i = 1; i < 11; i++) {
      const randomNumber: number = Math.floor(Math.random() * dataLength);
      recommendItem.push(copyItemData[randomNumber]);
      copyItemData[randomNumber] = copyItemData[dataLength - 1];
      dataLength--;
    }
    return recommendItem;
  }

  swiperOption: object = {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    loop: true
  };
}
</script>

<style lang="scss" scoped>
.recommend-loading {
  width: 100%;
  padding: 30px 0;
  &__wrap {
    height: 100%;
    &__content {
      width: 200px;
      &__image {
        height: 200px;
        margin-bottom: 8px;
        border-radius: 5px;
      }
      &__name {
        width: 80%;
        height: 20px;
        border-radius: 5px;
        margin-bottom: 8px;
      }
      &__tag {
        width: 50px;
        height: 24px;
        border-radius: 15px;
      }
    }
  }
}

.loading {
  background: linear-gradient(90deg, #f6f7f8, #edeff1, #f6f7f8);
  background-size: 200%;
  animation: loading 1.5s ease infinite;
}

@keyframes loading {
  0% {
    background-position: 0 0;
  }
  to {
    background-position: -200% 0;
  }
}

@media screen and (max-width: 680px) {
  .recommend {
    &__wrap {
      flex-direction: column;
    }
  }
}
</style>
