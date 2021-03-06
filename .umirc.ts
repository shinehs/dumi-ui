import { defineConfig } from 'dumi';

const repo = 'tiya-ui';

export default defineConfig({
  title: repo,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    // {
    //   title: '我有二级导航',
    //   path: 'components',
    //   // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
    //   children: [
    //     { title: '第一项', path: './src/Button' },
    //     { title: '第二项', path: './src/Foo' },
    //   ],
    // },
  ],
  // more config: https://d.umijs.org/config
  themeConfig: {
    carrier: 'tiya', // 设备状态栏左侧的文本内容
    hd: {
      // 禁用高清方案
      // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
});
