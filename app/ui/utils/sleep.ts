export const waiting=(timeout:number)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(true)
        }, timeout);
    })
}