const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if(Math.random() < 0.5 ){
            resolve("Hello world")
        }else{
            reject(new Error('hello error'))
        }
    }, 2000)
})

/*promise.then((msg) => {
    return msg.toUpperCase()
}).then((msg) =>{
    console.log(msg)
}).catch((error) =>{
    console.log(error)
})*/

promise.then(msg => msg.toUpperCase() )
.then(msg => console.log(msg))
.catch(error => console.log(error))