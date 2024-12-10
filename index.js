const express = require('express')
const xml2js = require('xml2js')

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
  let logMessage = '消息推送\n'
  if (req.is('application/xml')) {
    const parser = new xml2js.Parser()
    parser.parseString(req.body, (err, result) => {
      if (err) {
        logMessage += '解析 XML 失败\n'
      } else {
        logMessage += JSON.stringify(result, null, 2) + '\n'
      }
    })
  } else {
    logMessage += JSON.stringify(req.body, null, 2) + '\n'
  }
  console.log(logMessage)
  res.send('success') // 不进行任何回复，直接返回success，告知微信服务器已经正常收到。
})

app.listen(80, function(){
  console.log('服务启动成功！')
})