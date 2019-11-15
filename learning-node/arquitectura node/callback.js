const asyncCallback = function(cb){
    //Error first callback
    //Primero mandamos el error y despues los parametros
    setTimeout(()=>{
        if(Math.random() < 0.5 ){
            return cb(null, "Hello world")
        }else{
            cb(new Error('hello error'))
        }
    }, 2000)
}

asyncCallback((error, msg) =>{
    if(error){
        console.log('error', error)
    }else{
        console.log('message', msg)
    }
})