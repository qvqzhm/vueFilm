<template>
  <div>
    <van-tabs v-model="active" sticky border :ellipsis="false" v-if="this.$route.meta.isVideo">
      <van-tab to="/video/tuijian" title-style="font-size:18px">
        <template #title>{{navList[0]}}</template>
        <template #default><router-view></router-view></template>
      </van-tab>
      <van-tab :title="navList[1]" to="/video/hotread" title-style="font-size:18px">
        <router-view></router-view>
      </van-tab>
      <van-tab :title="navList[2]" to="/video/new" title-style="font-size:18px">
        <router-view></router-view>
      </van-tab>
      <van-tab :title="navList[3]" to="/video/qsee" title-style="font-size:18px">
        <router-view></router-view>
      </van-tab>
      <van-tab to="/video/ji" title-style="font-size:18px">
        <template #title>{{navList[4]}}</template>
        <template #default><router-view></router-view></template>
      </van-tab>
    </van-tabs>
    <router-view v-else></router-view>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      navList:['推荐','热片解读','新片预告','速看电影','距集综艺'],
      active:0
    }
  },
  mounted() {
    this.active = this.$route.meta.acVdo
  },
  methods:{

  }
}
</script>

<style lang="scss">

</style>