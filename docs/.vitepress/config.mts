import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "ruoyi-element-ai",
	head: [
		["meta", { name: "author", content: "HeJiaYue520" }],
		["meta", { name: "keywords", content: "Element-Plus-X, element-plus-x, ruoyi-element-ai, ruoyi-element-ai-docs, Vue, Vue3, AI, template" }],
		["link", { rel: "icon", href: "/logo.svg" }],
	],
	markdown: {
		lineNumbers: true,
		container: {
			tipLabel: '💡 提示',
			warningLabel: '📌 注意',
			dangerLabel: '💔 危险',
			infoLabel: '💌 消息',
			detailsLabel: '🎨 展开',
		},
	},
	lastUpdated: true,
	themeConfig: {
		logo: "/logo.svg",
    // 搜索相关配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
		// algolia: {
		// 	appId: "K9588QGDQG",
		// 	apiKey: "1c32155629ad42a8b1d091f76564c443",
		// 	indexName: "ruoyi-element-ai",
		// },
		lastUpdated: {
			text: '更新时间',
			formatOptions: {
				dateStyle: 'medium',
				timeStyle: 'short',
			},
		},
		docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
		sidebarMenuLabel: '菜单',
		returnToTopLabel: '返回顶部',
		lastUpdatedText: '最后更新于',
		darkModeSwitchLabel: '深色模式',
		outline: {
			label: '📖 目录',
			level: [2, 6],
		},
		socialLinks: [
			{
				icon: {
					svg: `<svg t="1749319018046" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5329" width="200" height="200"><path d="M64 512c0 195.2 124.8 361.6 300.8 422.4 22.4 6.4 19.2-9.6 19.2-22.4v-76.8c-134.4 16-140.8-73.6-150.4-89.6-19.2-32-60.8-38.4-48-54.4 32-16 64 3.2 99.2 57.6 25.6 38.4 76.8 32 105.6 25.6 6.4-22.4 19.2-44.8 35.2-60.8-144-22.4-201.6-108.8-201.6-211.2 0-48 16-96 48-131.2-22.4-60.8 0-115.2 3.2-121.6 57.6-6.4 118.4 41.6 124.8 44.8 32-9.6 70.4-12.8 112-12.8 41.6 0 80 6.4 112 12.8 12.8-9.6 67.2-48 121.6-44.8 3.2 6.4 25.6 57.6 6.4 118.4 32 38.4 48 83.2 48 131.2 0 102.4-57.6 188.8-201.6 214.4 22.4 22.4 38.4 54.4 38.4 92.8v112c0 9.6 0 19.2 16 19.2C832 876.8 960 710.4 960 512c0-246.4-201.6-448-448-448S64 265.6 64 512z" fill="#040000" p-id="5330"></path></svg>`
				},
				link: "https://github.com/element-plus-x/ruoyi-element-ai"
			},
			{
				icon: {
					svg: `<svg t="1749318832889" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="200" height="200"><path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" fill="#C71D23" p-id="4369"></path></svg>`
				},
				link: "https://gitee.com/he-jiayue/ruoyi-element-ai"
			}
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: `Copyright ©${new Date().getFullYear()} ruoyi-element-ai &nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank">赣ICP备2025057058号-1</a> `
		},
		nav: [
			{ text: "🎨 指南", link: "/guide/", activeMatch: "/guide" },
			{
				text: "🎯 相关链接",
				items: [
					{ text: "预览地址", link: "https://chat.element-plus-x.com" },
					{ text: "Gitee 源码", link: "https://gitee.com/he-jiayue/ruoyi-element-ai" },
					{ text: "GitHub 源码", link: "https://github.com/element-plus-x/ruoyi-element-ai" },
					{ text: "文档源码", link: "https://github.com/element-plus-x/ruoyi-element-ai-docs" },
				],
			},
			{ text: "🎁 赞赏助力", link: "/sponsor/index" },
		],

		sidebar: {
			"/guide/": [ 
				{
					text: "指南",
					collapsed: true,
					items: [
						{ text: "介绍", link: "/guide/introduce" },
						{ text: "快速上手", link: "/guide/" },
						{ text: "目录结构", link: "/guide/catalogue" },
						{ text: "路由、菜单", link: "/guide/router" },
						{ text: "网络请求", link: "/guide/request" },
						{ text: "构建、部署", link: "/guide/build" },
					],
				},
				{
					text: "进阶",
					collapsed: true,
					items: [
						{ text: "项目规范", link: "/guide/standard" },
						{ text: "主题配置", link: "/guide/theme" },
						{ text: "布局模式", link: "/guide/layout" },
					],
				},
				{
					text: "其他",
					collapsed: true,
					items: [{ text: "常见问题", link: "/guide/question" }],
				},
			],
		},
	},
})
