<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluFooter'
  }
</script>

<style lang="scss" scoped>
  .footer {
      height: 20%;
      background:#a1eafb;
  }
</style>