<template>
  <div class="all-right">
    <about-article />
    <hot-article />
    <right-adert />
  </div>
</template>

<script>
import aboutArticle from "./About.vue";
import hotArticle from "./Hot.vue";
import rightAdert from "./Adert.vue";
export default {
  components: { aboutArticle, hotArticle, rightAdert },
  name: "allRight",
};
</script>

<style>
.all-right {
  width: 337px;
}
</style>