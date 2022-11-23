<template>
  <van-nav-bar title="狗眼" class="h_bg" @click-left="goback()">
    <template #left v-if="this.$route.meta.isSearch">
      <van-icon name="arrow-left" size="20" color="white"/>
    </template>
    <template #right v-else>
      <van-icon name="plus" size="20" color="white"/>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: "index",
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    goback(){
      this.$router.back()
    }
  },
}
</script>

<style scoped lang="scss">
.h_bg{
  background: pink;
}
</style>