<template>
  <div>
    <Lists :lists="github"></Lists>
    <v-child v-slot="data">
      <p>父级样式:{{ data.user }}</p>
    </v-child>
    <p @click="go">去server</p>
  </div>
</template>
<script>
  import $ from '../api/api-client'
  import Lists from '../components/lists'
  import vChild from '../components/Child'
  export default {
    components: {
      Lists,
      vChild
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