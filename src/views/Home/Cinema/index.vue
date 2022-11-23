<template>
  <div class="box">
    <van-dropdown-menu class="nav">
      <van-dropdown-item v-model="value" :options="option" title="全城"  ref="item">
        <van-tabs v-model="active">
          <van-tab title="商区">
            <van-tree-select
                :items="items"
                :active-id.sync="activeId"
                :main-active-index.sync="activeIndex"
            >
              <template #content>
                <van-image
                    v-if="activeIndex === 0"
                    src="https://img01.yzcdn.cn/vant/apple-1.jpg"
                />
                <van-image
                    v-if="activeIndex === 1"
                    src="https://img01.yzcdn.cn/vant/apple-2.jpg"
                />
              </template>
            </van-tree-select>
          </van-tab>
          <van-tab title="地铁站">
            <van-tree-select
                :items="items"
                :active-id.sync="activeId"
                :main-active-index.sync="activeIndex"
            >
              <template #content>
                <van-image
                    v-if="activeIndex === 0"
                    src="https://img01.yzcdn.cn/vant/apple-1.jpg"
                />
                <van-image
                    v-if="activeIndex === 1"
                    src="https://img01.yzcdn.cn/vant/apple-2.jpg"
                />
              </template>
            </van-tree-select>
          </van-tab>
        </van-tabs>
      </van-dropdown-item>

      <van-dropdown-item v-model="value" :options="option" title="品牌">

      </van-dropdown-item>

      <van-dropdown-item v-model="value" :options="option" title="特色">
        <div class="tese">
          <h4>{{getCinemaService.name}}</h4>
          <ul>
            <li v-for="item in getCinemaService.subItems" :key="item.id" :class="item.id == serverIndex?'active':''" @click="changeActive(item.id)">{{item.name}}</li>
          </ul>
        </div>
        <div class="type">
          <h4>{{getCinemaType.name}}</h4>
          <ul>
            <li v-for="item in getCinemaType.subItems" :key="item.id" :class="item.id == typeInde?'active':''" @click="changeTypeActive(item.id)">{{item.name}}</li>
          </ul>
        </div>

        <div class="chance">
          <van-button color="#e5e5e5" plain>重置</van-button>
          <van-button color="#f03d37">确定</van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>

    <van-card
        :desc="item.address"
        :title="item.name"
        centered
        v-for="item in cinemaList"
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
</template>

<script>
import {mapState,mapGetters} from "vuex";

export default {
  name: "index",
  mounted() {
    this.$store.dispatch('getCinema',this.$store.state.city.maizuoId)
    this.$store.dispatch('getChangeCinema',this.$store.state.city.cityId)
  },
  computed:{
    ...mapState({
      cinemaList:state => state.home.cinemaList,
    }),
    ...mapGetters(['getCinemaCity','getCinemaBus','getCinemaPP','getCinemaType','getCinemaService']),
  },
  data() {
    return {
      active:0,
      value: 0,
      switch1: false,
      switch2: false,
      option: [

      ],
      items:[],
      activeId: 1,
      activeIndex: 0,
      serverIndex:-1,
      typeInde:-1
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    changeActive(index){
      this.serverIndex = index
    },
    changeTypeActive(index){
      this.typeInde = index
    }
  },
}
</script>

<style scoped lang="scss">
.box{
  //margin-bottom: 50px;
}
  .nav{
    position: sticky;
    top: 43px;
    z-index: 99;
  }
  .price{
    color: gold;
    font-size: 20px;
  }
  .tese{
    color: #878787;
    padding: 15px;
    box-sizing: border-box;
    ul{
      font-size: 0;
      padding: 5px;
      box-sizing: border-box;
      li{
        display: inline-block;
        font-size: 14px;
        padding: 5px 10px;
        border-radius: 10px;
        border: 1px solid #878787;
        margin: 5px 10px;
      }
      .active{
        border-color: pink;
        color: pink;
      }
    }
  }
  .type {
    color: #878787;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;
    ul {
      font-size: 0;
      padding: 5px;
      box-sizing: border-box;

      li {
        display: inline-block;
        font-size: 14px;
        padding: 5px 10px;
        border-radius: 10px;
        border: 1px solid #878787;
        margin: 5px 10px;
      }

      .active {
        border-color: red;
        color: red;
      }
    }
}
  .chance{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    button{
      margin: 0 15px;
      color: white;
    }
  }
</style>