<template>
  <footer>
    <ul>
      <li><img class="phone" src="~img/phone.png" alt="" />4008208820</li>
      <li>Mail:浙江树人大学清乐园1号楼</li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "home-footer",
};
</script>

<style scoped>
footer {
  width: 100vw;
  height: 70px;
  background-color: #00000040;
  text-align: center;
}
.phone {
  width: 14px;
  height: 14px;
  margin-bottom: 4px;
}
footer ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  height: 100%;
  font-size: 20px;
  padding: 0;
  margin: 0;
}
</style>