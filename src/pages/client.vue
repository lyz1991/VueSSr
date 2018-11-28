<template>
  <div>
    <Lists :lists="github"></Lists>
    <p @click="go">去server</p>
  </div>
</template>
<script>
  import $ from '../api/api-client'
  import Lists from '../components/lists'
  export default {
    components: {
      Lists
    },
    data () {
      return {
        github: {
        }
      }
    },
    mounted () {
      $.get('users/github').then(res => {
        this.github = res
      })
    },
    methods: {
      go() {
        this.$router.push({
          name: 'app'
        })
      }
    }
  }
</script>