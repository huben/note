
OPTIONS 用于获取目的资源所支持的通信选项

### 产生 OPTIONS 请求
* 复杂请求
    简单请求定义
    1. 请求方法是 GET、HEAD、POST，Content-Type 必须是 application/x-www-form-urlencode、multipart/form-data、text/plain
    2. 请求中没有自定义 HTTP 头部
* 跨域

### 作用
header 带自定义信息的请求方式是带预检（preflighted）的跨域请求。在实际调用接口之前，会首先发出一个 options 请求，检测服务端是否支持真实的请求进行跨域的请求。