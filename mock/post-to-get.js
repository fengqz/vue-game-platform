/**
 * Created by Administrator on 2017/6/19.
 */
module.exports = function (req, res, next) {
  req.method = "GET";
  next();
}
/*添加中间件

json server 使用 RESTful 架构，GET请求可以获取数据，POST 请求则是添加数据。
在开发过程中，有时候想直接模拟获取POST请求返回结果，可以添加 express 中间件 将POST请求转为GET请求。

mock 目录下创建 post-to-get.js，内容如下
module.exports = function (req, res, next) {
  req.method = "GET";
  next();
}
启动命令添加运行中间件 --m mock/post-to-get.js
"mock": "json-server --watch mock/db.json --m mock/post-to-get.js",
  重新启动服务，POST请求就被转换为GET请求了*/
