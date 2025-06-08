# 路由、菜单

路由配置在 [src/routers](https://github.com/HalseySpicy/Geeker-Admin/tree/master/src/routers) 文件下面：

::: warning

- 项目默认采用静态添加路由方式控制
- 需要其它路由功能根据自己项目需求改造

:::

## 目录结构

```txt
.
├─ routers                    # 路由相关文件
├ ├─ modules                  # 路由模块
├ ├ ├─ dynamicRouter.ts       # 动态路由添加逻辑 (预留，目前没有在项目中使用，可自行改造)
├ │ └─ staticRouter.ts        # 静态路由配置
├ └─index.ts                  # 封装的路由守卫，统一执行路由跳转前、后的操作
└─
```

## 路由参数

```typescript
/** 路由参数简介 */
interface RouteRecordRaw {
  /** 路由访问路径 */
  path: string;
  /** 路由 name (对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选) */
  name: string;
  /** 路由重定向地址 */
  redirect: string;
  /** 视图文件路径 */
  component: string | (() => Promise<unknown>);
  /** 路由元信息 */
  meta: {
    /** 菜单和面包屑对应的图标 */
    icon: string;
    /** 路由标题 (用作 document.title || 菜单的名称) */
    title: string;
    /** 是否为默认聊天页面，控制默认聊天也和非默认聊天页面的切换，从而触发动画效果 */
    isDefaultChat: true;
    /** 是否在菜单中隐藏 [0是，1否] 预留 */
    isHide: boolean;
    /** 是否全屏[0是，1否] 预留 */
    isFull: boolean;
    /** 是否缓存路由数据[0是，1否] 预留 */
    isKeepAlive: boolean;
    /** 菜单英文名 预留 */
    enName: 'Master Station';
  };
  /** 多级路由嵌套 */
  children: RouteRecordRaw[];
}
```
