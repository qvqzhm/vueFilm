<template>
  <div>
    <van-tabs v-model="active" sticky border >
      <van-tab to="/city">
        <template #title> {{$store.state.city.cityActive}}<van-icon name="arrow-down" /> </template>
      </van-tab>
      <van-tab title="热映" to="/home" >
        <router-view></router-view>
      </van-tab>
      <van-tab title="影院" to="/home/cinema" >
        <router-view></router-view>
      </van-tab>
      <van-tab title="待映" to="/home/comming" >
        <router-view></router-view>
      </van-tab>
      <van-tab to="/search">
        <template #title><van-icon name="search" color="pink" size="20"/> </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      active: 1,
    };
  },

  mounted() {
    this.$store.dispatch('getCity')
    this.active = this.$route.meta.isActive

    this.$store.dispatch('getChangeCinema',this.$store.state.city.cityId)

    if (this.$store.state.city.maizuocity.length>0){
      let id = this.$store.state.city.maizuocity.map(item=>{
        if (item.name === this.$store.state.city.cityActive){
          return item.cityId
        }
      })
      this.$store.commit('MAIZUOID',parseInt(id.join('')))

      this.$store.dispatch('getCinema',this.$store.state.city.maizuoId)
      this.$store.dispatch('getComming',this.$store.state.city.cityId)

    }


  },
  methods:{

  },
  computed:{

  }
}
</script>

<style scoped>

</style>