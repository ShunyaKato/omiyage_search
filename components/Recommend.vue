<template>
  <div class="recommend">
    <h2 class="recommend__title">オススメ</h2>
    <div class="recommend__wrap">
      <div class="recommend__wrap__content" v-for="(itemData, index) in itemData" :key="index">
        <a class="recommend__wrap__content__link" :href="itemData.url">
          <img class="recommend__wrap__content__link__image" :src="itemData.image_url" />
        </a>
        <p class="recommend__wrap__content__name">{{itemData.name}}</p>
        <!-- <p class="recommend__wrap__content__price">{{itemData.price}}円</p> -->
        <Tag :itemId="itemData.id" />
      </div>
    </div>
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
}
</script>

<style lang="scss" scoped>
.recommend {
  background-color: #effffb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  &__title {
    font-size: 20px;
  }
  &__wrap {
    display: flex;
    justify-content: center;
    &__content {
      margin: 10px;
      width: 200px;
      &__link {
        &__image {
          width: 200px;
          height: 200px;
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
}

@media screen and (max-width: 680px) {
  .recommend {
    &__wrap {
      flex-direction: column;
    }
  }
}
</style>
