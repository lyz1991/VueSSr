<template>
  <Lists :lists="github"></Lists>
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
    }
  }
</script>