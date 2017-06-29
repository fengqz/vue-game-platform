/**
 * Created by Administrator on 2017/6/19.
 */
module.exports = function () {
  var faker = require("faker");
  faker.locale = "zh_CN";
  var _ = require("lodash");
  return {
    people: _.times(10, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    }),
    address: _.times(10, function (n) {
      return {
        id: faker.random.uuid(),
        city: faker.address.city(),
        county: faker.address.county()
      }
    })
  }
}



/*
方法二 使用 JSON Server 搭建 Mock 服务器

JSON Server 是一个创建伪RESTful服务器的工具，具体使用方法可以看官方文档，这里直接讲在vue-cli 中的用法。

配置流程

全局安装 $ npm install -g json-server
项目目录下创建 mock 文件夹
mock 文件夹下添加 db.json 文件，内容如下{
 "posts": [
 { "id": 1, "title": "json-server", "author": "typicode" }
 ],
 "comments": [
 { "id": 1, "body": "some comment", "postId": 1 }
 ],
 "profile": { "name": "typicode" }
 }
 package.json 添加命令
 "mock": "json-server --watch mock/db.json",
 "mockdev": "npm run mock & npm run dev"

 启动 mock 服务器

 $ npm run mock 命令 运行 mock server
 访问 http://localhost:3000/
 发现 db.json 下第一级 json 对象被解析成为可访问路径




 faker.js 批量生成伪数据

 如果需要大量的伪数据，手动构造比较费时费力，可以使用 faker.js 批量生成。faker.js 的具体使用参见官方文档，这里做一个示例。

 $ cnpm install faker -G 全局安装 faker
 mock 目录下创建 faker-data.js，内容如下
 module.exports = function () {
 var faker = require("faker");
 faker.locale = "zh_CN";
 var _ = require("lodash");
 return {
 people: _.times(100, function (n) {
 return {
 id: n,
 name: faker.name.findName(),
 avatar: faker.internet.avatar()
 }
 }),
 address: _.times(100, function (n) {
 return {
 id: faker.random.uuid(),
 city: faker.address.city(),
 county: faker.address.county()
 }
 })
 }
 }
 $ json-server mock/faker-data.js 在 json server 中使用 faker
 请求 http://localhost:3000/address 可以获取到随机生成的100组伪数据

*/
