跨域资源共享
### 简单请求
同时满足两大条件
1. HEAD、GET、POST
2. 常见请求头
  Content-Type application/x-www-form-urlencode、multipart/from-data、text/plain

### 非简单请求
预检请求（preflight）
1. PUT、DELETE
2. Content-Type application/json
3. 自定义请求头