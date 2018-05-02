#文件目录设计
├── init # 数据库初始化目录
│   ├── index.js # 初始化入口文件
│   ├── sql/    # sql脚本文件目录
│   └── util/   # 工具操作目录
├── package.json 
├── config.js # 配置文件
├── server  # 后端代码目录
│   ├── app.js # 后端服务入口文件
│   ├── codes/ # 提示语代码目录
│   ├── controllers/    # 操作层目录
│   ├── models/ # 数据模型model层目录
│   ├── routers/ # 路由目录
│   ├── services/   # 业务层目录
│   ├── utils/  # 工具类目录
│   └── views/  # 模板目录
└── static # 前端静态代码目录
    ├── build/   # webpack编译配置目录
    ├── output/  # 编译后前端代码目录&静态资源前端访问目录
    └── src/ # 前端源代码目录

#后端代码目录
└── server
    ├── controllers # 操作层 执行服务端模板渲染，json接口返回数据，页面跳转
    │   ├── admin.js
    │   ├── index.js
    │   ├── user-info.js
    │   └── work.js
    ├── models # 数据模型层 执行数据操作
    │   └── user-Info.js
    ├── routers # 路由层 控制路由
    │   ├── admin.js
    │   ├── api.js
    │   ├── error.js
    │   ├── home.js
    │   ├── index.js
    │   └── work.js
    ├── services # 业务层 实现数据层model到操作层controller的耦合封装
    │   └── user-info.js
    └── views # 服务端模板代码
        ├── admin.ejs
        ├── error.ejs
        ├── index.ejs
        └── work.ejs

#路由目录
└── server # 后端代码目录
    └── routers
        ├── admin.js # /admin/* 子路由
        ├── api.js #  resetful /api/* 子路由
        ├── error.js #   /error/* 子路由
        ├── home.js # 主页子路由
        ├── index.js # 子路由汇总文件
        └── work.js # /work/* 子路由
 # ...



https://cnodejs.org/topic/58ac640e7872ea0864fedf90

# 安装淘宝镜像cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装依赖
cnpm install

# 数据建库初始化
npm run init_sql

# 编译react.js源码
npm run start_static

# 启动服务
npm run start_server

安装koa-router 路由中间件
npm install --save koa-router@7

安装koa-bodyparser@3中间件 ,把koa2上下文的formData数据解析到ctx.request.body中，
<!-- 省去了解析的烦恼 -->
npm install --save koa-bodyparser@3

安装koa-static中间件   静态资源加载
npm install --save koa-static

cookies跟session
<!-- koa-session-minimal 适用于koa2 的session中间件，提供存储介质的读写接口 。
koa-mysql-session 为koa-session-minimal中间件提供MySQL数据库的session数据读写操作。 -->
npm install --save koa-session-minimal
npm install --save koa-mysql-session


6、
# 安装koa模板使用中间件
npm install --save koa-views

# 安装ejs模板引擎
npm install --save ejs

7、busboy 模块是用来解析POST请求，node原生req中的文件流。
npm install --save busboy

8、安装 node.js的mysql模块
npm install --save mysql

9、jsop中间件
npm install --save koa-jsonp

10、单元测试
npm install --save-dev mocha chai supertest
mocha 模块是测试框架
chai 模块是用来进行测试结果断言库，比如一个判断 1 + 1 是否等于 2
supertest 模块是http请求测试库，用来请求API接口


11、debug
node --inspect 文件名.js  进入debug模式