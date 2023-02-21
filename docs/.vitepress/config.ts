import { defineConfig } from "vitepress";

export default defineConfig({
  title: "无纸化平台",
  lang: 'zh-CN',
  description: "领先的金融应用SaaS提供商",
  themeConfig: {
    nav: nav(),
    footer: {
      message: "欢迎访问无纸化平台 Copyright © 2023 对策府库",
      //copyright: '<a href="http://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">吉ICP备2022004975号-7</a>'
    },
    sidebar: {
      '/':[{
        text: "使用指导",
        collapsed: false,
        items: [
          { text: "介绍", link: "/guide/getting-started.html" },
          { text: "更新日志", link: "/guide/log.html" },
          { text: "更多推荐", link: "/guide/more.html" },
          { text: "致谢", link: "/guide/thanks.html" },
        ],
      }],
      '/data/':[{
        text: "使用指导",
        collapsed: false,
        items: [
          { text: "介绍", link: "/guide/getting-started.html" },
        ],
      }]
    },
  },
});
function nav() {
  return [
    { text: '使用文档', link: '/guide/getting-started.html', activeMatch: '/guide/' },
    { text: 'QQ群', link: '/more/qq.html', activeMatch: '/more/qq' },
    { text: '微信公众号', link: '/data/help.html', activeMatch: '/data/' },

  ]
}