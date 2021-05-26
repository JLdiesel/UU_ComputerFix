<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <slot class="content"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {});
  },
};
</script>

<style>
</style>