<template>
  <div class="box">
    <transition
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
    >
      <van-nav-bar
          fixed
          @click-left="onClickLeft"
          @click-right="onClickRight"
          v-show="isshow || showPic"
      >
        <template #left>
          <van-icon name="arrow-left" color="black"/>
        </template>
        <template #title v-if="!showPic">
          {{film.nm}}
        </template>
        <template #title v-else>
          剧照({{film.photos.length}})
        </template>
      </van-nav-bar>
    </transition>
    <div v-show="!showPic">
      <van-image
          width="100%"
          height="15rem"
          fit="cover"
          :src="film.img"
      />
      <div class="info">
        <div class="head">
          <h3>{{film.nm}} <van-tag color="#d2d6dc">{{film.cat}}</van-tag></h3>
          <span class="pf"><i>{{film.sc}}</i>分</span>
        </div>
        <p>{{film.category}}</p>
        <p>{{ film.pubDesc}}</p>
        <p>{{film.src}} | {{film.dur}}分钟</p>
        <van-collapse v-model="activeNames">
          <van-collapse-item title="详情" name="1">{{film.shareInfo.content}}</van-collapse-item>
        </van-collapse>
      </div>
<!--      <div class="at">-->
<!--        <h4>演职人员</h4>-->
<!--        <div class="banner">-->
<!--          <div class="swiper mySwiper">-->
<!--            <div class="swiper-wrapper">-->
<!--              <div class="swiper-slide" v-for="item in film.actors" :key="item.avatarAddress">-->
<!--                <div class="prople">-->
<!--                  <img :src="item.avatarAddress" alt="">-->
<!--                  <p>{{item.name}}</p>-->
<!--                  <p>{{item.role}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            &lt;!&ndash;          <div class="swiper-pagination"></div>&ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="pic at">
        <van-nav-bar>
          <template #right>
            <div @click="toPic()">
              <span class="all">全部（{{film.photos.length}}）</span>
              <van-icon name="arrow" color="grey" size="14"/>
            </div>
          </template>
          <template #left>
            剧照
          </template>
        </van-nav-bar>
        <div class="banner">
          <div class="swiper mySwiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in film.photos" :key="item" >
                <div class="prople">
                  <img :src="item" alt="" @click="big(item,index)">
                </div>
              </div>
            </div>
            <!--          <div class="swiper-pagination"></div>-->
          </div>
        </div>
      </div>
    </div>

    <pic v-show="showPic" :pic="film.photos"></pic>
  </div>
</template>

<script>
import pic from './Pic'

import {mapState} from "vuex";
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import moment from 'moment'

import {ImagePreview} from 'vant'

export default {
  name: "index",
  data(){
    return{
      isshow:false,
      activeNames: ['1'],
      showPic:false
    }
  },
  filters:{
    getTime(time){
      return moment(time).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  mounted() {
    this.$store.dispatch('getDetail',this.$route.params)
    window.addEventListener('scroll',this.scrollDiv)
  },
  computed:{
    ...mapState({
      film:state => state.detail.film
    })
  },
  methods: {
    onClickLeft() {
      if (!this.showPic){
        this.$router.back()
      }else {
        this.showPic = !this.showPic
      }
    },
    onClickRight() {

    },
    scrollDiv(){
      if (document.documentElement.scrollTop>0){
        this.isshow = true
      }else {
        this.isshow = false
      }
    },
    big(item,index){
      ImagePreview({
        images: this.film.photos,
        closeable: true,
        startPosition: index
      });
    },
    toPic(){
      this.showPic = true
    }
  },
  watch:{
    film:{
      immediate:true,
      handler(){
        this.$nextTick(()=>{
          new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
          new Swiper(".mySwiper2", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
        })
      }
    }
  },

  components:{
    pic
  }
}
</script>

<style scoped lang="scss">
  .box{
    background: #f4f4f4;
    p{
      font-size: 13px;
      color: #bdbfc1;
      margin: 5px 0;
    }
    .info{
      width: 100%;
      padding: 15px;
      background: white;
      margin-bottom: 10px;
      box-sizing: border-box;
      .van-collapse-item__content{
        font-size: 13px;
      }
      .head{
        display: flex;
        justify-content: space-between;
        .pf{
          color: gold;
          font-size: 14px;
          i{
            font-size: 20px;
          }
        }
      }
    }
    .at{
      width: 100%;
      background: white;
      padding: 15px;
      box-sizing: border-box;
      .banner{
        width: 100%;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        .swiper {
          width: 100%;
          height: 100%;
        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;

          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .prople{
          text-align: center;
          padding: 15px 0;
          p{
            font-size: 14px;
          }
        }
      }
    }
    .all{
      color: gray;
      font-size: 14px;
    }
  }
</style>