<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <g-button @click="onClickButton">上方弹出</g-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .gulu-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import plugin from '../../../src/plugin'
  import GButton from '../../../src/button/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {GButton},
    data () {
      return {
        content: `
          <div>
            <g-button @click="onClickButton">上方弹出</g-button>
          </div>
          methods: {
            onClickButton () {
              this.$toast('加粗的提示', {
                closeButton: {
                  text: '关闭',
                }
              })
            }
          },
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>