<template>
  <div class="main">
    <h1 class="main__title">おみやげ検索</h1>
    <p class="main__text">あなたにピッタリなおみやげを見つけよう！！</p>
    <div class="main__icon">
      <font-awesome-icon class="main__icon__outer" icon="angle-down" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Main extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  background-color: #97eec3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  -webkit-text-stroke: 1px #424242;
  height: 400px;
  &__title {
    font-size: 50px;
    font-weight: bold;
  }
  &__text {
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
  }
  &__icon {
    position: relative;
    &__outer {
      font-size: 100px;
      color: #ffffff;
      stroke: #424242;
      stroke-width: 5;
    }
    &__inner {
      position: absolute;
      font-size: 90px;
      color: #ffffff;
      top: 0px;
      left: 0px;
    }
  }
}
</style>