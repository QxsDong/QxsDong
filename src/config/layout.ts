/* 布局配置 */

interface LayoutSettings {
  // 控制 settings panel 显示
  showSettings: boolean
  // 控制 tagsview 显示
  showTagsView: boolean
  // 控制 siderbar logo 显示
  showSidebarLogo: boolean
  // 如果为真，将固定 header
  fixedHeader: boolean
  // 控制 中英文切换 显示
  showLangSelect: boolean
  // 控制 换肤按钮 显示
  showThemeSwitch: boolean
  // 控制 全屏按钮 显示
  showScreenfull: boolean
}

const layoutSettings: LayoutSettings = {
  showSettings: true,
  showTagsView: true,
  fixedHeader: false,
  showSidebarLogo: true,
  showLangSelect: true,
  showThemeSwitch: true,
  showScreenfull: true
}

export default layoutSettings