<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name: 'App',
    async created() {
    	await this.$store.dispatch('getOffers')
    }
  }
</script>
