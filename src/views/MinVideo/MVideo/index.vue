<template>
  <div class="boxx" ref="vbox">
    <video
        id="myvideo"
        class="video-js vjs-big-play-centered vjs-default-skin"
        controls
        :poster="mvItem.images[0].url"
        data-setup="{}"
    >
      <source :src="mvItem.video.url" type="video/mp4" />
      <source :src="mvItem.images[0].url" type="video/webm" />
    </video>
    <ul>
      <li>
        <div>
          <img :src="mvItem.images[0].url" alt="" class="headimg">
        </div>
      </li>
      <li>
        <div class="icimg">
          <img src="//p1.meituan.net/moviemachine/5377c2c03dacf20b6e286e3e72dd57911272.png@80q" alt="" class="icc">
        </div>
        <p>{{mvItem.upCount}}</p>
      </li>
      <li>
        <div class="icimg">
          <span><van-icon name="chat-o" size="20px"/></span>
        </div>
        <p>评论</p>
      </li>
      <li>
        <div class="icimg">
          <span><van-icon name="share-o" size="20px"/></span>
        </div>
        <p>分享</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index",
  mounted() {
    this.mvItem = this.$store.state.video.mvItem
  },
  data(){
    return{
      width:0,
      mvItem:{}
    }
  },
  watch:{
    mvItem:{
      immediate:true,
      handler(){
        this.$nextTick(()=>{
          let myPlayer = this.$video('myvideo', {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            autoplay: true,
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: 'auto',
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
  .boxx{
    height: 100vh;
    width: 100%;
    .video-js{
      top: 50%;
      width: 100%;
      height: 100%;
      transform: translateY(-50%);
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
    ul{
      position: fixed;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      li{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        color: white;
        font-size: 14px;
        .headimg{
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
        .icimg{
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,.3);
          margin-bottom: 10px;
          .icc{
            width: 21px;
            height: 21px;
            border-radius: 50%;
          }
        }
        p{
          width: 100%;
          text-align: center;
        }
      }
    }
  }
</style>