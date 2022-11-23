<template>
  <div>
    <van-index-bar :index-list="getCityPT.cityIndex">
      <div v-for="item in getCityPT.cityPY">
        <van-index-anchor :index="item.type" >{{item.type}}</van-index-anchor>
        <van-cell :title="i.nm" v-for="i in item.city" :key="i.id" @click="changeCity(i.id,i.nm)"/>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "index",
  data() {
    return {
      indexList: [],
    };
  },
  mounted() {
  },
  computed:{
    ...mapGetters(['getCityPT'])
  },
  methods:{
    changeCity(id,name){
      this.$store.commit('CHANGECITY',[id,name])
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>