<template>
  <div>
    <div class="box" >
      <div v-if="!this.$route.meta.isMv">
        <div class="mv" v-for="item in mvList" :key="item.id" @click="tosee(item)" >
          <img :src="item.video.imgUrl" alt="" v-lazy="item.video.imgUrl">
          <div class="info">
            <div class="left">
              <img :src="item.user.avatarurl" alt="" v-lazy="item.user.avatarur">
              <span>{{ item.user.nickName }}</span>
            </div>
            <p>
              <img src="//p1.meituan.net/moviemachine/5377c2c03dacf20b6e286e3e72dd57911272.png@80q" alt="" >
              <span>{{ item.upCount }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <router-view v-if="this.$route.meta.isMv"></router-view>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "index",
  mounted() {
    this.$store.dispatch('getMV')
  },
  computed:{
    ...mapState({
      mvList : state => state.video.mvList
    })
  },
  methods:{
    tosee(item){
      this.$store.commit('GETMVITEM',item)
      this.$router.push({
        path:'/minvideo/mv'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.box{
  column-count: 2;
  column-gap: 7px;
  .mv{
    width: 100%;
    position: relative;
    color: white;
    margin-bottom: 8px;
    font-size: 13px;
    img{
      width: 100%;
      height: 100%;
    }
    .info{
      width: 100%;
      position: absolute;
      padding: 15px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      .left{
        display: flex;
        align-items: center;
        span{
          margin-left: 5px;
        }
        img{
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
      }
      p{
        display: flex;
        align-items: center;
        img{
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        span{
          margin-left: 5px;
        }
      }
    }
  }
}

</style>