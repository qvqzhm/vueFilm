<template>
  <div class="box">


    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <van-cell v-for="item in getHotList" :key="item.id">
        <template #default>
          <van-card
              :title="item.nm"
              :thumb="item.img"
              centered
          >
            <template #desc>
              <div @click="goDetail(item.id)">
                <p v-if="item.sc>0">观众评 <span class="fen">{{item.sc}}</span></p>
                <p v-else>暂无评论</p>
                <p>主演：<span>{{item.star}}</span></p>
                <p>{{item.showInfo}}</p>
              </div>
            </template>
            <template #num>
              <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" size="mini">
                购票
              </van-button>
            </template>
          </van-card>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'

import Vue from "vue";

// Vue.filter('getActors',(item)=>{
//   let arr = item.map(i =>i.name)
//   return arr.join(' ')
// })

export default {
  name: "index",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      num:[],
      index:10
    };
  },

  mounted() {
    this.$store.dispatch('getHot',this.$store.state.city.cityId)
  },
  computed:{
    ...mapGetters(['getHotList','getMovieId']),
  },
  methods:{
    goDetail(item){
      this.$router.push({
        name:'detail',
        params:{
          id:item
        }
      })
    },
    onLoad() {
      // this.list = [...this.getHotList,this.list]
      //
      // this.num = []
      // for (let i = this.index;i<this.index+10;i++){
      //   this.num.push(this.getMovieId[i])
      // }
      //
      // this.index = this.index+10
      //
      // this.$store.dispatch('getMore',this.num)
      //
      // this.list = [...this.list,...this.$store.state.home.moreList]

      this.loading = false;

      if (this.getHotList.length > 0) {
        this.finished = true;
      }
    },
  }
}
</script>

<style scoped>
.box{

}
  .fen{
    color: rgb(250, 175, 0);
    font-size: 18px;
  }
</style>