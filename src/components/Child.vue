<template>
    <div>
      <slot :user="name">
        <p>默认的: {{ name }}</p>
      </slot>
    </div>
</template>

<script>
  export default {
    name: "Child",
    data() {
      return {
        name: 'child'
      }
    }
  }
</script>

<style scoped>

</style>