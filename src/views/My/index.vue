<template>
  <div>
    my
  </div>
</template>

<script>
export default {
  name: "index",
  mounted() {
    if (!this.$store.state.my.hasLogin){
      this.$router.replace({
        path:'/login'
      })
    }
  }
}
</script>

<style scoped>

</style>