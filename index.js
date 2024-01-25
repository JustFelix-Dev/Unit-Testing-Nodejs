const express = require("express")
const app = express()

app.use(express.json())
app.get('/users',(req,res)=>{
    res.status(200).json({
        users:[
            {
                name:'Felix',
                email:'owolabofelix78@gmail.com',
                password: "noblefella"
            }
        ]
    })
})
const add = (a,b)=>{
    return a + b
}

const err = ()=>{
     throw new Error('This is an error')
}

const promiseTest=(a,b)=>{
   return new Promise((resolve,reject)=>{
    if(a-b>0){
        resolve('+ve')
    }else{
        reject('-ve')
    }
    })
}

app.listen(2000)

module.exports= { add,err,promiseTest,app }