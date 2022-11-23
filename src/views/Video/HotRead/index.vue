<template>
  <div>
<!--    <videoPlay :reqdata="[1331498,1665710150669,15]"></videoPlay>-->
    <Vpic :tjVideo="tjVideo"></Vpic>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Vpic from '@/components/VideoPlay/Vpic'

export default {
  name: "index",
  components:{
    Vpic
  },
  mounted() {
    this.$store.dispatch('getVideo',[1331498,1665710150669,15])
  },
  computed:{
    ...mapState({
      tjVideo : state => state.video.tjVideo
    })
  }
}
</script>

<style lang="scss" scoped>


</style>