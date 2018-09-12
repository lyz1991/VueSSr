<template>
    <div class="demo">
        {{content}} number:  {{id}}
        <Name></Name>
        <router-view/>
    </div>
</template>
<script>
  import Name from './components/name'
 export default {
   name: "app",
   asyncData ({ store, route }) {
     // 触发 action 后，会返回 Promise
     return store.dispatch('fetchItem', '22')
   },
   components: {
     Name
   },
   mounted () {
     console.log(this.$store)
   },
   computed: {
     id () {
       return this.$store.state.id
     }
   },
   data () {
     return {
       content: 'ssr demo'
     }
   }
 }
</script>
<style lang="scss">
    .demo {
        color: red;
    }
</style>