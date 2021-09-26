const express = require('express')

const app = express()
app.use(express.static(__dirname + '/server/static'))
app.get('/person', (req, res) => {
    res.send({
        name: 'yxs',
        age: 27
    })
})
app.listen(5005, (err) => {
    if (!err) {
        console.log('服务器启动成功了')
    }
})