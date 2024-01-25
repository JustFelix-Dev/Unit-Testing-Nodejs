const add = (a,b)=>{
    return a + b
}

const err = ()=>{
     throw new Error('This is an error')
}

module.exports= { add,err}