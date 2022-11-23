<template>
  <div>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" route placeholder >
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item :icon="active != 1?require('@/assets/video.png'):require('@/assets/video2.png')" to="/video">视频</van-tabbar-item>
      <van-tabbar-item :icon="active != 2?require('@/assets/mv.png'):require('@/assets/mv2.png')" to="/minvideo">小视频</van-tabbar-item>
      <van-tabbar-item :icon="active != 3?require('@/assets/my.png'):require('@/assets/my2.png')" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
export default {
  name: "index",
  data(){
    return{
      active:0
    }
  }
}
</script>

<style scoped lang="scss">

</style>