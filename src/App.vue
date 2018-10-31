<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
 export default {
   name: "app",
   head() {
     return {
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: "description", content: 'hello ssr'},
          { name: 'keywords', content: 'hello ssr'}
        ],
       __dangerouslyDisableSanitizers: ['script']
     }
    }
 }
</script>