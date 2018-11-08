<style lang="scss">

  .border {
    padding: 10px;
    font-size: 26px;
    text-align: center;
    width: 90%;
    border: 1px solid transparent;
  }
</style>
<template>
  <div>
    <p v-for="(value, key) in lists" class="name">
      {{key}}是: {{value}}
    </p>
    <div class="border">没有了</div>
  </div>
</template>
<script>
  export default {
    props: ['lists'],
    head() {
      return {
        title: 'client 端'
      }
    }
  }
</script>