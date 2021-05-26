<template>
  <div>
    <banner />
    <pay-banner />
    <pay-main />
    <specialty />
    <home-footer />
    <div class="advertisement"><img src="~img/scroll.png" alt="" /></div>
  </div>
</template>

<script>
import Banner from "common/banner/Banner.vue";
import Specialty from "common/Footer/Specialty.vue";
import HomeFooter from "common/Footer/homeFooter.vue";
import orederBanner from "components/order/orederBanner.vue";
import OrderMain from "components/order/orderMain.vue";
import PayBanner from "../../components/pay/payBanner.vue";
import PayMain from "../../components/pay/payMain.vue";

export default {
  name: "order",
  components: {
    Banner,
    Specialty,
    HomeFooter,
    orederBanner,
    OrderMain,

    PayBanner,
    PayMain,
  },
};
</script>

<style scoped>
.advertisement img {
  width: 155px;
  height: 200px;
  position: fixed;
  right: 0;
  top: 60vh;
}
</style>