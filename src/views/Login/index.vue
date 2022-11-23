<template>
  <div>
    <router-view v-if="this.$route.meta.isRegister"></router-view>
    <div v-else>
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
          :rules="[{ required: true, message: '请输入用户名' }]" />
        <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请输入密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        没有账号？<router-link to="/login/register">立即注册</router-link>
      </van-divider>
    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      // this.$store.commit('CHANGELOGIN',true)
      // this.$router.replace({
      //   path:'/my'
      // })
    },
  }
}
</script>

<style scoped>
.toregister {
  text-align: center;
}

a {
  color: blue;
}
</style>