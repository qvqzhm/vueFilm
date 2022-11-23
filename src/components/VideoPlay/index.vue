<template>
  <div ref="vbox">
    <div class="vbox">
      <div class="v">
        <video
            id="myvideo"
            class="video-js vjs-big-play-centered vjs-default-skin"
            controls
            :poster="tjVideo.images[0].url"
            data-setup="{}"
        >
          <source :src="tjVideo.video.url" type="video/mp4" />
          <source :src="tjVideo.images[0].url" type="video/webm" v-lazy="tjVideo.images[0].url"/>
        </video>
      </div>
      <div class="bom">
        <div class="left">
          <img :src="tjVideo.user.avatarurl" alt="" class="img" v-lazy="tjVideo.user.avatarurl">
          {{tjVideo.user.nickName}}
        </div>
        <div class="right">
          <span><van-icon name="good-job-o" size="18px"/>{{ tjVideo.upCount }}</span>
          <span><van-icon name="chat-o" size="18px"/>{{tjVideo.commentCount}}</span>
          <span><van-icon name="share-o" size="18px"/></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  mounted() {
    this.tjVideo = this.$store.state.video.vItem
  },
  data(){
    return{
      width:0,
      tjVideo:{}
    }
  },
  watch:{
    tjVideo:{
      immediate:true,
      handler(){
        this.$nextTick(()=>{
          let myPlayer = this.$video('myvideo', {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            autoplay: false,
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: 'auto',
            width:this.$refs.vbox.offsetWidth,
            height:'400px',
          },function (){
            this.on('play',()=>{

            })
          });
        })
      }
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
    z-index: 999;
    color: white;
    padding: 10px 15px;
  }
}
.vbox{
  width: 100%;
  margin-bottom: 10px;
  .video-js{
    width: 100%;
  }
  .video-js .vjs-big-play-button {
    font-size: 2.5em !important;
    line-height: 2.3em !important;
    height: 2.5em !important;
    width: 2.5em !important;
    -webkit-border-radius: 2.5em !important;
    -moz-border-radius: 2.5em !important;
    border-radius: 2.5em !important;
    background-color: #73859f;
    background-color: rgba(115, 133, 159, 0.5) !important;
    border-width: 0.15em !important;
    margin-top: -1.25em !important;
    margin-left: -1.75em !important;
  }
  .vjs-big-play-button .vjs-icon-placeholder {
    font-size: 1.63em !important;
  }
  .vjs-paused .vjs-big-play-button,
  .vjs-paused.vjs-has-started .vjs-big-play-button {
    display: block !important;
  }
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