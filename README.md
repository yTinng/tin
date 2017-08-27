#this is my first static pages
###这个是welle文档
>  #####比较Ios版本
div URL: `GET /api/v1/ios/:version/compare`
1.是最新版本，返回 “success”
2.不是最新版本，返回"err"
>
> #####比较Android版本
URL: `GET /api/v1/android/:version/compare`
1.是最新版本，返回 “success”
2.不是最新版本，返回新版本下载地址
```javascript
{
	"versionUrl": 'http://127.0.0.1',
}
```
>
> #####比较Welle版本
URL: `GET /api/v1/welleversion/:version/compare`
1.是最新版本，返回 “success”
2.不是最新版本，返回新版本下载地址
```javascript
{
	"versionUrl": 'http://127.0.0.1',
}
```
>
> #####提交日志
URL: `POST /api/v1/log/commit`
参数：
```javascript
{
	"id": 1,
	"welleVersion": '1.0.0', //welle固件版本
  "appVersion":'1.0.0',//app版本
  "networkType":'http',
  "ip": '127.0.0.1',
  "region":'shenzhen',//api查询ip记录对应地区
  "actionType":'1.0.0',//行为类型
  "uid": '123456',//手机uid
  "platform": 'ios',//平台类型
  "welleuid": '11223344',//welle固件设备id
}
```
>
> #####版本更新
URL: ``
```javascript
{
	"id":1,
	"version": '1.0.0',//版本
	"newDescription": 'good',//更新描述
	"installCount": 3,//安装次数
	"status": 'active',//状态
	"createdAt": '2017-08-24 04:01:32',//创建时间
	"updatedAt": '2017-08-24 04:01:32',
}
```
