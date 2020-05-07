<template>
  <div class="feature">
    <h1 class="feature__title">こだわり</h1>
    <ClearButton :keyName="'featureIds'" />
    <div class="feature__wrap">
      <div class="feature__wrap__content" v-for="(feature, index) in featureData" :key="index">
        <input
          name="feature"
          class="feature__wrap__content__checkbox"
          type="checkbox"
          :id="`featureIds:${feature.featureId}`"
          @change="updateFeatureParams(feature.featureId)"
          :checked="isChecked(feature.featureId)"
        />
        <label
          class="feature__wrap__content__label"
          :for="`featureIds:${feature.featureId}`"
        >{{feature.name}}</label>
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
export default class Feature extends Vue {
  get featureData() {
    return this.$store.state.featureData;
  }

  isChecked(featureId: number) {
    if (this.$store.state.searchParams.featureIds.includes(featureId)) {
      return "checked";
    }
  }

  updateFeatureParams(featureId: number) {
    this.$store.dispatch("updateFeatureParams", featureId);
  }
}
</script>

<style lang="scss" scoped>
.feature {
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
