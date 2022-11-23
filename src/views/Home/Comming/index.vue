<template>
  <div class="box">
    <van-card
        :title="item.nm"
        :thumb="item.img"
        centered
        v-for="item in commingList.coming"
    >
      <template #desc>
        <p><span class="fen">{{item.wish}}</span>人想看</p>
        <p>主演：<span>{{item.star}}</span></p>
      </template>
      <template #num>
        <van-button color="linear-gradient(to right, #ff6034, #ffd700)" size="mini">
          想看
        </van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "index",
  mounted() {
    this.$store.dispatch('getComming',this.$store.state.city.cityId)
  },
  computed:{
    ...mapState({
      commingList:state => state.home.commingList
    })
  }
}
</script>

<style scoped>
.box{
  /*margin-bottom: 50px;*/
}
.fen{
  color: rgb(250, 175, 0);
  font-size: 18px;
}
</style>