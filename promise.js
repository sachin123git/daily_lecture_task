

let pro = new Promise((resolve, reject)=>{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let isExist = arr.includes(10)
    console.log(isExist)
    if(isExist){
        resolve()
    }else{
        reject('get some error')
    }
})
pro.then((res)=>{
    console.log('value is there')

})
.catch((error)=>{
    console.log('error occur')
})


let string = new Promise((resolve, reject)=>{
    let string = "sachin"
    console.log(string)
    if(string==="sachin"){
        resolve('match')
    }else{
        reject('error')
    }
})
string.then((res)=>{
    console.log('string matched')
})
.catch((err)=>{
    console.log('get some error')
})

