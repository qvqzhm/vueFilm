<template>
  <div ref="vbox">
    <div class="vbox" v-for="(item,index) in tjVideo" :key="item.id">
      <div class="v" @click="tovideo(item)">
        <img :src="item.video.imgUrl" alt="">
        <h3 class="v_title">{{item.title}}</h3>
        <svg t="1665715776051" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2556" width="64" height="64"><path d="M435.2 665.6V358.4l256 153.6z" p-id="2557" fill="#8a8a8a"></path><path d="M512 204.8c168.96 0 307.2 138.24 307.2 307.2s-138.24 307.2-307.2 307.2-307.2-138.24-307.2-307.2 138.24-307.2 307.2-307.2m0-51.2c-199.68 0-358.4 158.72-358.4 358.4s158.72 358.4 358.4 358.4 358.4-158.72 358.4-358.4-158.72-358.4-358.4-358.4z" p-id="2558" fill="#8a8a8a"></path></svg>
      </div>
      <div class="bom">
        <div class="left">
          <img :src="item.user.avatarurl" alt="" class="img">
          {{item.user.nickName}}
        </div>
        <div class="right">
          <span><van-icon name="good-job-o" size="18px"/>{{ item.upCount }}</span>
          <span><van-icon name="chat-o" size="18px"/>{{item.commentCount}}</span>
          <span><van-icon name="share-o" size="18px"/></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props:['tjVideo'],
  methods:{
    tovideo(v){
      this.$store.commit('GETVITEM',v)
      this.$router.push({
        path:'/video/see'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.v{
  position: relative;
  .v_title{
    position: absolute;
    top: 0;
    color: white;
    padding: 10px 15px;
  }
  img{
    width: 100%;
    height: 200px;
  }
  svg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
.vbox{
  width: 100%;
  margin-bottom: 10px;
  .bom{
    color: #7a7a7a;
    padding: 10px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      align-items: center;
      .img{
        border-radius: 50%;
        width: 25px;
        height: 25px;
      }
    }
    .right{
      span:not(:last-child){
        margin: 0 10px;
      }
    }
  }
}
</style>