<template>
  <div>
    <form action="/">
      <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
      />
    </form>

    <div v-show="searchFilms.length>0">
      <p class="title">电影/电视剧/综艺</p>
      <van-card
          :title="item.nm || item.name"
          :thumb="item.poster || item.img"
          centered
          v-for="item in searchFilms"
      >
        <template #desc>
          <p v-if="item.grade">观众评 <span class="fen">{{item.grade}}</span></p>
          <p v-else-if="!item.grade"><span class="fen">{{item.wish}}</span>人想看</p>
          <p v-if="item.actors">主演：<span>{{item.actors | getActors}}</span></p>
          <p v-else-if="!item.actors">主演：<span>{{item.star}}</span></p>
        </template>
        <template #num>
          <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" size="mini" v-if="item.name">
            <span>购票</span>
          </van-button>
          <van-button color="linear-gradient(to right, #ff6034, #ffd700)" size="mini" v-else-if="!item.name">
            <span>想看</span>
          </van-button>
        </template>
      </van-card>
    </div>

    <div class="cinema" v-show="searchCinema.length>0">
      <p class="title">影院</p>
      <van-card
          :desc="item.address"
          :title="item.name"
          centered
          v-for="item in searchCinema"
          :key="item.cinemaId"
      >
        <template #num>
        <span class="price">
          {{item.lowPrice/100}}
        </span>
          <span>元起</span>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      value: '',
      hotList:[],
      cinemaList:[],
      commingList:[],
      concatList:[],
      searchFilms:[],
      searchCinema:[]
    };
  },
  methods: {
    onSearch(val) {
      this.searchFilms = this.concatList.filter(item=> {
        if (item.name){
          return item.name.includes(val)
        }else {
          return item.nm.includes(val)
        }
      })
      this.searchCinema = this.cinemaList.filter(item=> item.address.toUpperCase().includes(val.toUpperCase()) || item.name.toUpperCase().includes(val.toUpperCase()))
    },
    onCancel() {
      // Toast('取消');
      this.$router.back()
    },
  },
  mounted() {
    this.hotList = this.$store.state.home.hotList.hot
    this.cinemaList = this.$store.state.home.cinemaList
    this.commingList = this.$store.state.home.commingList.coming
    this.concatList = [...this.hotList,...this.commingList]
  }
}
</script>

<style scoped lang="scss">
    .title{
      padding: 15px;
      color: gray;
    }
    .fen{
      color: rgb(250, 175, 0);
      font-size: 18px;
    }
    .cinema{
      margin-top: 30px;
    }
    .price{
      color: gold;
      font-size: 20px;
    }
</style>