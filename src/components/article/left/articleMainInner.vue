<template>
  <div>
    <link-list />
    <Article />
  </div>
</template>

<script>
import Article from "./child/article.vue";
import linkList from "./child/linkList.vue";
export default {
  components: { Article, linkList },
};
</script>

<style>
</style>