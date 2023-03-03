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
          { text: "注册指南", link: "register.html" },
          { text: "论坛规则", link: "rules.html" },
          { text: "常见问题集锦", link: "QandA.html" }
        ],
      }],
      '/data/':[{
        text: "索引",
        collapsed: false,
        items: [
          { text: "主页", link: "index.html" },
          { text: "注册指南", link: "register.html" },
          { text: "论坛规则", link: "rules.html" },
          { text: "常见问题集锦", link: "QandA.html" }
        ],
      }]
    },
  },
});


function nav() {
  return [
    { text: '👨‍👨‍👦‍👦睿思帮助群', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=1HJMJ2b8egrCbyReT-xRUoAD58rYMjWK&jump_from=webapi&authKey=boCbnfFr0jYeHdiUk3IbbkBxJfrBk1MYOK02VsuadYb4nR0lDiwue1eXJJmMRe4r'} 
  ]
}