const path = require('path')
module.exports = {
  base: '/wheels/',
  title: 'wheels UI',
  description: '一个好用的UI框架',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '文档',
        collapsable: false,
        children: [
          '/install/',
          '/introduction/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/slides',
        ]
      },

    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
