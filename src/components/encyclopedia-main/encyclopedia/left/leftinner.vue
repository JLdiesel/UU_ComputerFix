<template>
  <search-frame />
  <Article />
</template>

<script>
import Article from "./article.vue";
import searchFrame from "./searchFrame.vue";
export default {
  name: "leftInner",
  components: { searchFrame, Article },
};
</script>

<style>
</style>