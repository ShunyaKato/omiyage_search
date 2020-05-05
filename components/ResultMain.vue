<template>
  <div class="result-main">
    <h1 class="result-main__title">検索結果</h1>
    <div class="result-main__conditions">
      <p class="result-main__conditions__text">検索条件</p>
      <ul class="result-main__conditions__lists">
        <li class="result-main__conditions__lists__list"></li>
      </ul>
    </div>
    <div class="result-main__counts">
      <p class="result-main__counts__text">ヒット数</p>
    </div>
    <div class="result-main__wrap">
      <div class="result-main__wrap__content">
        <a class="result-main__wrap__content__link">
          <img class="result-main__wrap__content__link__image" />
        </a>
        <p class="result-main__wrap__content__name">表品名</p>
        <p class="result-main__wrap__content__price">コスト</p>
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

@Component
export default class ResultMain extends Vue {}
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
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
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
