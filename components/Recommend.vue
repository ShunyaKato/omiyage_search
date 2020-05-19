<template>
  <div class="recommend">
    <h2 class="recommend__title">オススメ</h2>
    <swiper class="recommend__wrap" :options="swiperOption">
      <swiper-slide
        class="recommend__wrap__content"
        v-for="(itemData, index) in randomRecommendItem"
        :key="index"
      >
        <a class="recommend__wrap__content__link" :href="itemData.url">
          <img class="recommend__wrap__content__link__image" :src="itemData.image_url" />
        </a>
        <p class="recommend__wrap__content__name">{{itemData.name}}</p>
        <Tag :itemId="itemData.id" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    Tag: () => import("~/components/Tag.vue")
  }
})
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
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
}
</script>

<style lang="scss" scoped>
.recommend {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  &__title {
    font-size: 20px;
  }
  &__wrap {
    width: 100%;
    height: 100%;
    &__content {
      width: 200px;
      &__link {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        &__image {
          max-width: 200px;
          max-height: 100%;
        }
      }
      &__name {
        font-size: 16px;
      }
    }
  }
}

.swiper-pagination {
  position: initial;
  margin-top: 5px;
}

@media screen and (max-width: 680px) {
  .recommend {
    &__wrap {
      flex-direction: column;
    }
  }
}
</style>
