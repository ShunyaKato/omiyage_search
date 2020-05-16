<template>
  <div class="main">
    <h1 class="main__title">おとりよせ検索</h1>
    <p class="main__text">
      あなたにピッタリな
      <span class="main__text__break"></span>ご当地グルメを見つけよう！！
    </p>
    <font-awesome-icon class="main__icon" icon="angle-down" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Main extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  // background-color: #50d890;
  background-image: url(~@/assets/background_image.jpg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  -webkit-text-stroke: 1px #424242;
  padding: 30px 0 10px 0;
  &__title {
    font-size: 50px;
    font-weight: bold;
  }
  &__text {
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
  }
  &__icon {
    font-size: 100px;
    color: #ffffff;
    stroke: #424242;
    stroke-width: 5;
  }
}

@media screen and (max-width: 680px) {
  .main {
    -webkit-text-stroke: 0.7px #424242;
    &__title {
      font-size: 40px;
    }
    &__text {
      font-size: 20px;
      &__break {
        display: block;
      }
    }
    &__icon {
      font-size: 70px;
    }
  }
}
</style>
