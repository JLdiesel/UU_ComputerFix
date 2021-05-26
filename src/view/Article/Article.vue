<template>
  <div>
    <banner />
    <article-banner />
    <article-main />
    <specialty />
    <home-footer />
    <div class="advertisement"><img src="~img/scroll.png" alt="" /></div>
  </div>
</template>

<script>
import Banner from "common/banner/Banner.vue";
import Specialty from "common/Footer/Specialty.vue";
import HomeFooter from "common/Footer/homeFooter.vue";
import ArticleMain from "components/article/article-main.vue";
import ArticleBanner from "components/article/article-banner.vue";

export default {
  components: { Banner, Specialty, HomeFooter, ArticleMain, ArticleBanner },
};
</script>

<style scoped>
.home {
  position: relative;
}
.advertisement img {
  width: 155px;
  height: 200px;
  position: fixed;
  right: 0;
  top: 60vh;
}
</style>