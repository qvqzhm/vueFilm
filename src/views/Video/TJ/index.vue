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
    this.$store.dispatch('getVideo',[0,1665709727438,1])
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