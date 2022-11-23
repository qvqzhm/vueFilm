<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field v-model="username" @focus="show1 = true" name="username" label="用户名" placeholder="用户名（手机号）" :rules="[{
        required: true, message: umgs,
        validator: user,
        trigger: 'onBlur'
      }]" />
      <van-field v-model="password" @focus="show2 = true" type="password" name="password" label="密码" placeholder="密码(至少八位)" :rules="[{
        required: true, message: pmsg,
        validator: value => {
          let reg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*()_.]+)$)^[\w~!@#$%^&*()_.]{8,16}$/
          if (reg.test(value)) {
            return true
          } else {
            this.pmsg = '密码应为8-16位字母，数字，特殊符号(~!@#$%^&*()_.)，两种及以上组合'
            return false
          }
        },
      }]" />
      <van-field v-model="passc" @focus="show3 = true" type="password" name="passc" label="密码" placeholder="确认密码" :rules="[{
        required: true, message: pcmsg,
        validator: value => {
          if (this.password === value) {
            return true
          } else {
            this.pcmsg = '两次输入的密码不一致'
            return false
          }
        },
      }]" />
      <van-number-keyboard
        :show="show1"
        @blur="show1 = false"
        @input="onInput1"
        @delete="onDelete1"
      />
      <van-number-keyboard
        :show="show2"
        @blur="show2 = false"
        @input="onInput2"
        @delete="onDelete2"
      />
      <van-number-keyboard
        :show="show3"
        @blur="show3 = false"
        @input="onInput3"
        @delete="onDelete3"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <van-popup v-model="show">
      <div class="sv">
        <slide-verify
          :l="42"
          :r="10"
          :w="310"
          :h="155"
          slider-text="请拖动滑块完成验证"
          @success="onSuccess"
          @fail="onFail"
          @refresh="onRefresh"
          :imgs="imgs"
          :accuracy='5'
        ></slide-verify>
      </div>
    
    </van-popup>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import {reqRegister} from '@/api'
import { log } from 'video.js';

export default {
  name: "index",
  data() {
    return {
      username: '',
      password: '',
      passc: '',
      umgs: '用户名不合法',
      pmsg: '密码不合法',
      pcmsg: '确认密码不合法',
      show1: false,
      show2: false,
      show3: false,
      show:false,
      imgs: [
        "https://img0.baidu.com/it/u=3156137851,1307209439&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        "https://img2.baidu.com/it/u=4147884680,3389833900&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        "https://img2.baidu.com/it/u=962649406,713927692&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
        "https://img2.baidu.com/it/u=4244947304,878295677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334",
        "https://img0.baidu.com/it/u=3643895624,2552772604&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675"
      ],
      values:{
        username:'',
        password:''
      }
    };
  },
  methods: {
    user(value) {
      return new Promise((resolve) => {
        let reg = /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/
        if (reg.test(value)) {
          resolve(true)
        } else {
          this.umgs = '用户名应为手机号码'
          resolve(false)
        }
      });
    },

    onSubmit(values) {
      this.show = true
      
      // this.$store.commit('CHANGELOGIN',true)
      // this.$router.replace({
      //   path:'/my'
      // })
    },

    onSuccess() {
      reqRegister(values.username,values.password).then(res=>{
        if(res.ok){
          console.log('liangzai');
        }else{
          console.log('diaomao');
        }
      })
    },
    onFail() {
      return false
    },
    onRefresh() {
      console.log("刷新回调");
    },




    onInput1(value) {
      this.username += value
    },
    onInput2(value) {
      this.password += value
    },
    onInput3(value) {
      this.passc += value
    },
    onDelete1() {
      this.username = this.username.split('').splice(0,this.username.length-1).join('')
    },
    onDelete2() {
      this.password = this.password.split('').splice(0,this.password.length-1).join('')
    },
    onDelete3() {
      this.passc = this.passc.split('').splice(0,this.passc.length-1).join('')
    },
  }
}
</script>

<style scoped>
  .sv{
    padding: 16px;
    background: white;
  }
</style>