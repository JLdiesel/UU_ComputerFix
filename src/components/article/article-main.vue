<template>
  <div class="ency-main">
    <article-main-inner />
    <all-right />
  </div>
</template>

<script>
import ArticleMainInner from "./left/articleMainInner.vue";
import allRight from "common/right/AllRight.vue";
export default {
  name: "articleMain",
  components: { allRight, ArticleMainInner },
};
</script>

<style>
.ency-main {
  position: relative;
}
</style>