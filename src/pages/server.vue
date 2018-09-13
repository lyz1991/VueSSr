<template>
  <div class="demo">
    <p>{{content}}:</p>
    <Lists :lists="data"></Lists>
    <div class="name" @click="go()">
      去客户端
    </div>
  </div>
</template>
<script>
  import Lists from '../components/lists'
  export default {
    name: "index",
    components: {
      Lists
    },
    async asyncData ({ store, route, ctx }) {
      await store.dispatch('fetchItem')
    },
    computed: {
      data () {
        return this.$store.state.github
      }
    },
    data () {
      return {
        content: 'github信息'
      }
    },
    methods: {
      go () {
        this.$router.push({
          name: 'client'
        })
      }
    }
  }
</script>
<style lang="scss">
  .demo {
    color: red;
  }
</style>