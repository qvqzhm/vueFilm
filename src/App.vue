<template>
  <div id="app">
    <Head v-if="this.$route.meta.isCity"></Head>
    <router-view></router-view>
    <Foot v-if="this.$route.meta.isHome"></Foot>
  </div>
</template>

<script>
import Head from "@/components/Header";
import Foot from './views/Home/Footer'

export default {
  name: "App",
  components:{
    Head,
    Foot
  },
  mounted() {
    this.$store.dispatch('getMaizuoCity')
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
</style>
