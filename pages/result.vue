<template>
  <div class="result">
    <ResultMain />
    <Banner />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    ResultMain: () => import("~/components/ResultMain.vue"),
    Banner: () => import("~/components/Banner.vue")
  }
})
export default class Result extends Vue {
  head() {
    return {
      title: "検索結果 | おとりよせ検索",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "おとりよせ検索の検索結果画面です。" || ""
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.result {
  padding-bottom: 50px;
}
</style>
