(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{196:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"http核心模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http核心模块","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP核心模块")]),t._v(" "),e("h2",{attrs:{id:"http超文本传输协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http超文本传输协议","aria-hidden":"true"}},[t._v("#")]),t._v(" http超文本传输协议")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("协议至少双方 -> http双方！！")]),t._v(" "),e("ul",[e("li",[t._v("客户端(浏览器)    -> 服务器  BS")])]),t._v(" "),e("ul",[e("li",[t._v("原生应用(QQ)  -> 服务器 CS")])])]),t._v(" "),e("li",[e("p",[t._v("就是数据如何传输")])]),t._v(" "),e("li",[e("p",[t._v("特点:")]),t._v(" "),e("ul",[e("li",[t._v("一问一答（先有请求，后有响应）")]),t._v(" "),e("li",[t._v("5大特点：\n"),e("ul",[e("li",[t._v("轻便/    简单快速       支持客户/服务器模式")]),t._v(" "),e("li",[t._v("无连接（不为每一个请求保持住链接）")]),t._v(" "),e("li",[t._v("无状态( 服务器不记得客户端是谁 ) -> cookie")])])])])])]),t._v(" "),e("h2",{attrs:{id:"主体对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主体对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 主体对象")]),t._v(" "),e("ul",[e("li",[t._v("服务器对象 "),e("code",[t._v("http.createServer();")])]),t._v(" "),e("li",[t._v("客户端对象"),e("code",[t._v("http.request({host:'www.baidu.com'});")])]),t._v(" "),e("li",[t._v("请求报文对象(对于服务器来说，是可读)  req")]),t._v(" "),e("li",[t._v("响应报文对象(对于服务器来说，是可写) res")])]),t._v(" "),e("h2",{attrs:{id:"状态码分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态码分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态码分类")]),t._v(" "),e("ul",[e("li",[t._v("1 开头，正在进行中")]),t._v(" "),e("li",[t._v("2开头，完成")]),t._v(" "),e("li",[t._v("3开头 ，重定向")]),t._v(" "),e("li",[t._v("4开头 ， 客户端异常")]),t._v(" "),e("li",[t._v("5开头， 服务器异常")])]),t._v(" "),e("h2",{attrs:{id:"创建服务器步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建服务器步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建服务器步骤")]),t._v(" "),e("ul",[e("li",[t._v("1:引入http核心对象")]),t._v(" "),e("li",[t._v("2:利用http核心对象的.createServer(callback); 创建服务器对象")]),t._v(" "),e("li",[t._v("3:使用服务器对象.listen(端口,ip地址) 开启服务器")]),t._v(" "),e("li",[t._v("4:callback(req,res) 根据请求处理响应")])]),t._v(" "),e("h2",{attrs:{id:"请求报文对象-只读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求报文对象-只读","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求报文对象(只读)")]),t._v(" "),e("ul",[e("li",[t._v("请求首行中的url "),e("code",[t._v("req.url")])]),t._v(" "),e("li",[t._v("请求首行中的请求方式 "),e("code",[t._v("req.method")])]),t._v(" "),e("li",[t._v("请求头中的数据"),e("code",[t._v("req.headers")]),t._v("  是一个对象")]),t._v(" "),e("li",[t._v("头信息中，也可以作为与服务器交互的一种途径")])]),t._v(" "),e("h2",{attrs:{id:"获取请求体数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取请求体数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取请求体数据")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("代码对比")])]),t._v(" "),e("li",[e("p",[t._v("浏览器:  $('#xx').on('submit',function(e){    })")])]),t._v(" "),e("li",[e("p",[t._v("服务器:  req.on('data',function(d){ d.toString(); })")])])]),t._v(" "),e("h2",{attrs:{id:"响应对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应对象")]),t._v(" "),e("ul",[e("li",[t._v("响应首行 "),e("code",[t._v("res.writeHead(状态码)")])]),t._v(" "),e("li",[t._v("写响应头\n"),e("ul",[e("li",[t._v("一次性写回头信息\n"),e("ul",[e("li",[e("code",[t._v("res.writeHead(200,headers)")])])])]),t._v(" "),e("li",[t._v("多次设置头信息\n"),e("ul",[e("li",[e("code",[t._v("res.setHeader(key,value);")])])])])])]),t._v(" "),e("li",[t._v("写响应体\n"),e("ul",[e("li",[t._v("一次性写回响应体\n"),e("ul",[e("li",[e("code",[t._v("res.end();")])])])]),t._v(" "),e("li",[t._v("多次写回响应体\n"),e("ul",[e("li",[e("code",[t._v("res.write();")])])])])])])]),t._v(" "),e("h2",{attrs:{id:"请求与响应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求与响应","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求与响应")]),t._v(" "),e("ul",[e("li",[t._v("头行体")]),t._v(" "),e("li",[t._v("content-type是对请求或者响应体数据，做出的说明")])]),t._v(" "),e("h2",{attrs:{id:"响应体数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应体数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应体数据")]),t._v(" "),e("ul",[e("li",[t._v("res.write('字符串'||读出文件的二进制数据)")]),t._v(" "),e("li",[t._v("res.end('字符串'||读出文件的二进制数)")])]),t._v(" "),e("h2",{attrs:{id:"http总结梳理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http总结梳理","aria-hidden":"true"}},[t._v("#")]),t._v(" http总结梳理")]),t._v(" "),e("ul",[e("li",[t._v("http故事剧情中的主角 :  服务器（女）（响应报文） 客户端（男）（请求报文）\n"),e("ul",[e("li",[t._v("因为都是男人主动找女人")]),t._v(" "),e("li",[t._v("服务器:http.createServer创建服务器，监听端口listen，处理响应on('request',(req,res)=> { })")]),t._v(" "),e("li",[t._v("请求报文： 由于我们是服务端代码，所以该报文是浏览器发的，我们看就行了\n"),e("ul",[e("li",[t._v("头行体（异步）")])])]),t._v(" "),e("li",[t._v("响应保温：由于我们是服务端代码，所以响应报文，我们写就行了\n"),e("ul",[e("li",[t._v("头行体\n"),e("ul",[e("li",[t._v("头设置1次，和多次")]),t._v(" "),e("li",[t._v("体写1次和多次")])])])])])])])]),t._v(" "),e("h2",{attrs:{id:"querystring核心对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#querystring核心对象","aria-hidden":"true"}},[t._v("#")]),t._v(" querystring核心对象")]),t._v(" "),e("ul",[e("li",[t._v("querystring.parse(formStr)")]),t._v(" "),e("li",[t._v("username=jack&password=123转换成如下")]),t._v(" "),e("li",[t._v("{ username: 'jack', password: '123' }")])]),t._v(" "),e("h2",{attrs:{id:"跨域问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 跨域问题")]),t._v(" "),e("ul",[e("li",[t._v("传统开发方式:前端代码及请求数据接口都在同一个服务器上,前端代码测试依赖服务器")]),t._v(" "),e("li",[t._v("前后端分离:\n"),e("ul",[e("li",[t._v("静态服务器: 运行前端代码")]),t._v(" "),e("li",[t._v("后台服务器: 运行数据接口服务器")]),t._v(" "),e("li",[e("strong",[t._v("互不影响,浏览器向其他服务器发送ajax请求,会产生跨域")])])])])]),t._v(" "),e("h2",{attrs:{id:"jsonp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsonp","aria-hidden":"true"}},[t._v("#")]),t._v(" jsonp")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("知识点补充")])]),t._v(" "),e("li",[e("p",[t._v("url核心对象")])])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx.com?id=1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二个参数是将id=1转换成对象")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output:  { protocal:'http',..省略..query:{id:1}   }")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"cors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors","aria-hidden":"true"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  Access-Control-Allow-Origin: 'http://xxx.com'  //允许哪个域在跨域的时候访问,*代表所有\n  // 告诉浏览器,跨域时允许有cookie,同时客户端也要设置withCredentials:true + Origin不能是*\n  Access-Control-Allow-Credentials: true  \n  Access-Control-Allow-Methods: 'GET,POST,PUT,DELETE';   // 默认允许get/post\n  Access-Control-Allow-Headers:'xxx';   // 允许你自己加的头来通信\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("ul",[e("li",[t._v("浏览器在非简单请求(get/post)||包含自定义头||content-type非键值对的时候,会先请示服务器,来一个OPTIONS请求,如果不满足,拒绝发送ajax请求")])]),t._v(" "),e("h2",{attrs:{id:"代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理","aria-hidden":"true"}},[t._v("#")]),t._v(" 代理")]),t._v(" "),e("ul",[e("li",[t._v("下载依赖包便于请求操作 "),e("code",[t._v("npm i request -S")])])]),t._v(" "),e("h2",{attrs:{id:"配置https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置https","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置https")]),t._v(" "),e("ul",[e("li",[t._v("公钥  公开的加密方式")]),t._v(" "),e("li",[t._v("私钥  存在服务器的唯一解公钥加密的方式")]),t._v(" "),e("li",[t._v("签名  确保数据的一致性")]),t._v(" "),e("li",[t._v("证书  确保当前发送数据单位可信")])])])}],!1,null,null,null);a.default=r.exports}}]);