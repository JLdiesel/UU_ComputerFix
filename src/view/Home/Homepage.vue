<template>
  <div class="home">
    <banner />
    <main-banner />
    <main-inner />
    <flowchart />
    <encyclopedia-banner />
    <encyclopedia />
    <specialty />
    <home-footer />
    <div class="advertisement"><img src="~img/scroll.png" alt="" /></div>
  </div>
</template>

<script>
import Banner from "common/banner/Banner.vue";
import MainInner from "components/home/main/child/MainInner.vue";
import MainBanner from "components/home/main/child/MainBanner.vue";
import Flowchart from "components/home/FlowChart/Flowchart.vue";
import EncyclopediaBanner from "components/home/encyclopedia/Encyclopedia-banner.vue";
import Encyclopedia from "components/home/encyclopedia/Encyclopedia.vue";
import Specialty from "common/Footer/Specialty.vue";
import HomeFooter from "common/Footer/homeFooter.vue";

export default {
  name: "Homepage",
  components: {
    MainBanner,
    MainInner,
    Flowchart,
    EncyclopediaBanner,
    Banner,
    Encyclopedia,
    Specialty,
    HomeFooter,
  },
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
