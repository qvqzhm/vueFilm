<template>
  <div>
    <ul>
      <li v-for="(item,index) in pic" @click="gobig(item,index)">
        <img :src="item" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import {ImagePreview} from "vant";

export default {
  name: "index",
  props:['pic'],
  methods:{
    gobig(item,index){
      ImagePreview({
        images: this.pic,
        closeable: true,
        startPosition: index
      });
    }
  }
}
</script>

<style scoped lang="scss">
  div{
    margin-top: 46px;
  }
  ul{
    width: 100%;
    background: white;
    li{
      width: 30%;
      display: inline-block;
      margin: 0 1%;
      img{
        width: 100%;
        height: 100px;
      }
    }
  }
</style>