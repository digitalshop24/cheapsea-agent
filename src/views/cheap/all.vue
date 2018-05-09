<template>
  <div class="cheap">
    <div class="cheap__title">Все чиспсы</div>
  </div>
</template>
<script>
export default {
  name: 'cheap-all',
  mounted() {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="stylus" scoped>
.cheap
  padding 20px 40px
  max-width 600px
  margin 0 auto

.cheap__title
  font-size 18px
  font-weight bold
  color #333
  margin 10px auto
  
.cheap__text
  font-size 14px
  color #333
  
.cheap__offer-type
  width 200px
  display flex
  flex-direction column
  justify-content center
  align-items flex-start
  padding-left 15px

.cheap__offer-item
  margin-left 0
  margin-bottom 5px
</style>
