<template>
  <div>
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
    this.$store.dispatch('getVideo',[1067226,1665710344637,15])
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