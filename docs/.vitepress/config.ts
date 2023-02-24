import { defineConfig } from "vitepress";

export default defineConfig({
  title: "西电睿思-通知栏",
  lang: 'zh-CN',
  description: "一个小小的通知栏",
  themeConfig: {
    nav: nav(),
    footer: {
      message: "欢迎访问睿思通知栏",
      //copyright: '<a href="http://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer"> 陕ICP备05016463号-3</a>'
    },
    sidebar: {
      '/':[{
        text: "索引",
        collapsed: false,
        items: [
          { text: "主页", link: "index.html" },
          { text: "BBS注册指南", link: "BBSregister.html" },
          { text: "BBS论坛规则", link: "BBSrules.html" },
          { text: "PT注册指南", link: "PTregister.html" },
          { text: "PT论坛规则", link: "PTrules.html" }
        ],
      }],
      '/data/':[{
        text: "索引",
        collapsed: false,
        items: [
          { text: "主页", link: "index.html" },
          { text: "BBS注册指南", link: "BBSregister.html" },
          { text: "BBS论坛规则", link: "BBSrules.html" },
          { text: "PT注册指南", link: "PTregister.html" },
          { text: "PT论坛规则", link: "PTrules.html" }
        ],
      }]
    },
  },
});
function nav() {
  return [
    { text: 'QQ群', link: '/more/qq.html', activeMatch: '/more/qq' },
    { text: '微信公众号', link: '/data/help.html', activeMatch: '/data/' },

  ]
}