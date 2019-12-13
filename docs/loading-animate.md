为首屏增加 加载动画
====

## 需求

> 为了缓解用户第一次访问时，加载 JS 过大所导致用户等待白屏时间过长导致的用户体验不好，进行的一个优化动效。


## 实现方案

1. 将样式插入到 `public/index.html` 文件的 `<head></head>` 最好写成内联 `<style>动画样式</style>` 
```
<style>#loading-mask{position:fixed;left:0;top:0;height:100%;width:100%;background:#fff;user-select:none;z-index:9999;overflow:hidden}.loading-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-100%)}.loading-dot{animation:antRotate 1.2s infinite linear;transform:rotate(45deg);position:relative;display:inline-block;font-size:64px;width:64px;height:64px;box-sizing:border-box}.loading-dot i{width:22px;height:22px;position:absolute;display:block;background-color:#1890ff;border-radius:100%;transform:scale(.75);transform-origin:50% 50%;opacity:.3;animation:antSpinMove 1s infinite linear alternate}.loading-dot i:nth-child(1){top:0;left:0}.loading-dot i:nth-child(2){top:0;right:0;-webkit-animation-delay:.4s;animation-delay:.4s}.loading-dot i:nth-child(3){right:0;bottom:0;-webkit-animation-delay:.8s;animation-delay:.8s}.loading-dot i:nth-child(4){bottom:0;left:0;-webkit-animation-delay:1.2s;animation-delay:1.2s}@keyframes antRotate{to{-webkit-transform:rotate(405deg);transform:rotate(405deg)}}@-webkit-keyframes antRotate{to{-webkit-transform:rotate(405deg);transform:rotate(405deg)}}@keyframes antSpinMove{to{opacity:1}}@-webkit-keyframes antSpinMove{to{opacity:1}}</style>
```
2. 将 动画加载 dom 元素放在 #app 内
```
<span class="loading-dot loading-dot-spin"><i></i><i></i><i></i><i></i></span>
```

