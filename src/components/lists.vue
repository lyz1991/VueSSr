<template>
  <div>
    <p v-for="(value, key) in lists">
      {{key}}是: {{value}}
    </p>
  </div>
</template>
<script>
  export default {
    props: ['lists']
  }
</script>