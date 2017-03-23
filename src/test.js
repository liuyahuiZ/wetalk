const tasks = []; // 这里存放异步操作的 
Promiseconst output = (i) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(new Date, i);
        resolve();
    }, 1000 * i);});// 生成全部的异步操作
for (var i = 0; i < 5; i++) {
    tasks.push(output(i));}// 异步操作完成之后，输出最后的 
iPromise.all(tasks).then(() => {
    setTimeout(() => {
        console.log(new Date, i);
    }, 1000);});


const sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);});
(async () => {  // 声明即执行的 async 函数表达式
    for (var i = 0; i < 5; i++) {
        await sleep(1000);
        console.log("=>", i);
    }
    await sleep(1000);
    console.log(new Date, i);
})();