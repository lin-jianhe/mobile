<template>
  <div class="home">
    <div class="navBar">
      <router-link
        :to="item.path"
        v-for="(item, index) in textBar"
        :key="index"
        >{{ item.text }}</router-link
      >
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      textBar: [
        { text: "首页", path: "/home" },
        { text: "发现", path: "/discover" },
        { text: "购物车", path: "/cart" },
        { text: "我的", path: "mine" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.navBar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 70px;
  border-top: 1px solid #ccc;
  a {
    flex: 1;
    text-align: center;
    font-size: 18px;
    &.router-link-active {
      color: rgb(2, 167, 243);
    }
  }
}
</style>
