import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Avatar from '../components/Avatar.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }) {
    app.component('Avatar', Avatar);
  },
} satisfies Theme;
