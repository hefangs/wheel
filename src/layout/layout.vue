<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluLayout',
    data () {
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GuluSider') {
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    color: white; 
    height: 500px;;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>