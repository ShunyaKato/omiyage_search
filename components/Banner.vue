<template>
  <div class="banner">
    <iframe
      class="banner__iframe__first"
      src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=nipponstore&banner=0A5GZBQATME7MSETFNR2&f=ifr&linkID=1c340f6b24cfe0f8a1f4bfb8b14f3d46&t=katoma02-22&tracking_id=katoma02-22"
      width="728"
      height="90"
      scrolling="no"
      border="0"
      marginwidth="0"
      style="border:none;"
      frameborder="0"
    ></iframe>
    <iframe
      class="banner__iframe__second"
      src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=nipponstore&banner=102YXWFP833EAYH6JK02&f=ifr&linkID=bf36c6e5743140e2205bfaecde9d4360&t=katoma02-22&tracking_id=katoma02-22"
      width="300"
      height="250"
      scrolling="no"
      border="0"
      marginwidth="0"
      style="border:none;"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Banner extends Vue {}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  &__iframe__first {
    max-width: 95%;
  }
  &__iframe__second {
    display: none;
  }
}

@media screen and (max-width: 680px) {
  .banner {
    &__iframe__first {
      display: none;
    }
    &__iframe__second {
      display: block;
    }
  }
}
</style>
