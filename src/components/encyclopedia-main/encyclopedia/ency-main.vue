<template>
  <div class="ency-main"><left-inner /> <all-right /></div>
</template>

<script>
import leftInner from "./left/leftinner.vue";
import allRight from "common/right/AllRight.vue";
export default {
  name: "encyMain",
  components: { leftInner, allRight },
};
</script>

<style>
.ency-main {
  position: relative;
}
</style>