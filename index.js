const express = require('express')
const bodyParser = require('body-parser')
const xmlparser = require('express-xml-bodyparser')
const app = express()

app.use(bodyParser.json())
app.use(xmlparser())

app.post('/', async (req, res) => {
  console.log('收到消息推送')
  console.log('请求头信息:', req.headers)
  console.log('请求体:', req.body)
  res.send('success') // 不进行任何回复，直接返回success，告知微信服务器已经正常收到。
});

app.listen(80, function(){
  console.log('服务启动成功！')
})