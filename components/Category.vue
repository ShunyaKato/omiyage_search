<template>
  <div class="category">
    <h1 class="category__title">種類</h1>
    <ClearButton :keyName="'categoryId'" />
    <div class="category__wrap">
      <div class="category__wrap__content" v-for="(category, index) in categoryData" :key="index">
        <input
          name="category"
          class="category__wrap__content__checkbox"
          type="checkbox"
          :id="`categoryId:${category.categoryId}`"
          @change="updateCategoryParams(category.categoryId)"
          :checked="isChecked(category.categoryId)"
        />
        <label
          class="category__wrap__content__label"
          :for="`categoryId:${category.categoryId}`"
        >{{category.name}}</label>
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
export default class Category extends Vue {
  get categoryData() {
    return this.$store.state.categoryData;
  }

  isChecked(categoryId: number) {
    if (this.$store.state.searchParams.categoryIds.includes(categoryId)) {
      return "checked";
    }
  }

  updateCategoryParams(categoryId: number) {
    this.$store.dispatch("updateCategoryParams", categoryId);
  }
}
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  width: 171px;
  &__title {
    font-size: 20px;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    &__content {
      margin-bottom: 2px;
      display: flex;
      align-items: center;
      &__checkbox {
        margin-right: 5px;
      }
    }
  }
}

@media screen and (max-width: 680px) {
  .category {
    width: auto;
    &__wrap {
      display: grid;
      grid-template-columns: 82px 82px;
      grid-column-gap: 26px;
      grid-row-gap: 10px;
    }
  }
}
</style>
