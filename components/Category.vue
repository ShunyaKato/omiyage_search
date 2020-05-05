<template>
  <div class="category">
    <h1 class="category__title">種類</h1>
    <div class="category__wrap">
      <div class="category__wrap__content" v-for="(category, index) in categoryData" :key="index">
        <input class="category__wrap__content__checkbox" type="checkbox" :id="category.categoryId" />
        <label class="category__wrap__content__label" :for="category.categoryId">{{category.name}}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Category extends Vue {
  get categoryData() {
    return this.$store.state.categoryData;
  }
}
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 20px;
  }
  &__wrap {
    display: flex;
    align-items: center;
    &__content {
      margin: 0 5px;
      display: flex;
      align-items: center;
      &__checkbox {
        margin-right: 3px;
      }
    }
  }
}
</style>
