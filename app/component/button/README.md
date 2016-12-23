# 按钮 Button

按钮。

## API

### Button

| 参数 | 说明 | 类型 | 默认值 | 可选参数 |
| ---- | ---- | ---- | ---- | -------- |
| active | 触发状态 | Boolean | false | (true, false) |
| disabled | 禁用状态 | Boolean | false | (true, false) |
| fill | 是否是填充按钮 | Boolean | false | (true, false) |
| href | 链接 | String | "" | - |
| linkType | 当作为 `<a>` 渲染时，使用这个属性作为与原生 type 属性 | String | "" | - |
| onClick | 点击事件 | Function | noop | - |
| type | button 原生 type 值 | String | 'button' | ('button', 'menu', 'reset', 'submit') |

这种按钮类型是回弹按钮，无开启状态。且，href 和 type 参数只能存在其一，有 href 使用 `<a>` 标签渲染，有 type 使用 `<button>` 标签渲染。默认使用 `<button>` 渲染。
