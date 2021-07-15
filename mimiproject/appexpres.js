const express = require('express')

const app = express()
const port = 3000
//1
app.use(express.json())

const indexrout=require('./routes/index');
const userrout=require('./routes/users');


app.use('/',indexrout);
app.use('/users', userrout)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})