const express = require('express')
const app = express()
app.use(express.json())

app.post('/', async (req, res) => {
  console.log('收到消息推送')
  console.log('请求头信息:', req.headers)
  console.log('请求体:', req.body)
  res.send('success') // 不进行任何回复，直接返回success，告知微信服务器已经正常收到。
});

app.listen(80, function(){
  console.log('服务启动成功！')
})