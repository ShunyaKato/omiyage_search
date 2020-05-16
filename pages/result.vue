<template>
  <div class="result">
    <ResultMain />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
    ResultMain: () => import("~/components/ResultMain.vue")
  }
})
export default class Result extends Vue {
  head() {
    return {
      title: "検索結果画面 | おとりよせ検索",
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
</style>
