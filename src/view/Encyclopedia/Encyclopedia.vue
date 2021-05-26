<template>
  <div>
    <banner />
    <encyclopedia-banner />
    <ency-main />
    <specialty />
    <home-footer />
    <div class="advertisement"><img src="~img/scroll.png" alt="" /></div>
  </div>
</template>

<script>
import Banner from "common/banner/Banner.vue";
import EncyclopediaBanner from "components/encyclopedia-main/encyclopedia/Encyclopedia-banner.vue";
import Specialty from "common/Footer/Specialty.vue";
import HomeFooter from "common/Footer/homeFooter.vue";
import encyMain from "components/encyclopedia-main/encyclopedia/ency-main.vue";

export default {
  components: { Banner, EncyclopediaBanner, Specialty, HomeFooter, encyMain },
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