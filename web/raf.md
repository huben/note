
requestAnimationFrame 是浏览器用于定时循环操作的一个接口，主要用途是按帧对网页进行重绘。目的是为了让各种网页动画效果（DOM动画、canvas动画、SVG动画、WebGL 动画）能有一个统一的刷新机制，从而节省系统资源。提高系统性能，改善视觉效果。

```
window.requestAnimationFrame = (function() {
  return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60)
        }
}) ();

cancelAnimationFrame
取消重绘，参数是 requestAnimationFrame 返回的 ID
