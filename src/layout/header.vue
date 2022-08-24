<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluHeader'
  }
</script>

<style lang="scss" scoped>
  .header {
      height: 20%;
      background:#00adb5;
  }
</style>