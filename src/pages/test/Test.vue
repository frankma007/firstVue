<template>
	<div>   

test
 
   
	</div>
</template>
<script>

	export default {
    name: "Detail",
    components:{
    },
    data:function() {
      return{
 
      }
    },
    methods:{
    
     
    },
    mounted(){
      // async function testAsync() {
      //     return "hello async"
      // }
      // const result = testAsync()
      // console.log(result)

    //   let promise =new Promise(function (resolve,reject) {
    //     let a=1
    //     if(a===1){
    //       resolve(a)
    //     }else{
    //       reject(error)
    //     }        
    //   })
    //   promise.then(function (value) {
    //     console.log(value++)
    //     return value
    //   }).catch(function(error){
    //     console.log(error)
    //   }).then(function (value) {
    //     console.log(value++)
    //   })
// function getSomething() {
//     return "something";
// }

// async function testAsync() {
//     return Promise.resolve("hello async");
// }


// async function testAsync() {
//     return "hello async";
// }

// const result = testAsync();
// console.log(result);
// testAsync().then(v => {
//     console.log(v);    // 输出 hello async
// });
// async function test() {
//     const v1 = await getSomething();
//     const v2 = await testAsync();
//     console.log(v1, v2);
//     await console.log("abc")
    
// }

// test();

// function takeLongTime() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("long_time_value"), 1000);
//     });
// }

// takeLongTime().then(v => {
//     console.log("got", v);
// });

// async function test1() {
//     const v = await takeLongTime();
//     const s=123
//     console.log(s)
//     console.log(v);
// }

// test1();



/**
 * 传入参数 n，表示这个函数执行的时间（毫秒）
 * 执行的结果是 n + 200，这个值将用于下一步骤
 */
// function takeLongTime(n) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(n + 200), n);
//     });
// }

// function step1(n) {
//     console.log(`step1 with ${n}`);
//     return takeLongTime(n);
// }

// function step2(m, n) {
//     console.log(`step2 with ${m} and ${n}`);
//     return takeLongTime(m + n);
// }

// function step3(k, m, n) {
//     console.log(`step3 with ${k}, ${m} and ${n}`);
//     return takeLongTime(k + m + n);
// }
// function doIt() {
//     console.time("doIt");
//     const time1 = 300;
//     step1(time1)
//         .then(time2 => step2(time2))
//         .then(time3 => step3(time3))
//         .then(result => {
//             console.log(`result is ${result}`);
//             console.timeEnd("doIt");
//         });
// }

// doIt();


// async function doIt1() {
//     console.time("doIt1");
//     const time1 = 300;
//     const time2 = await step1(time1);
//     const time3 = await step2(time1, time2);
//     const result = await step3(time1, time2, time3);
//     console.log(`result is ${result}`);
//     console.timeEnd("doIt1");
// }

// doIt1();




// function sleep(second) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(' enough sleep~');
//         }, second);
//     })
// }
// function normalFunc() {
//     console.log('normalFunc');
// }
// async function awaitDemo() {

//     await normalFunc();
//      let result = await sleep(2000);
//     console.log(result);// 两秒之后会被打印出来
//     console.log('something, ~~');
   
// }
// awaitDemo();




//我们仍然使用 setTimeout 来模拟异步请求
// function sleep(second, param) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(param);
//         }, second);
//     })
// }

// async function test() {
//     let result1 = await sleep(2000, 'req01');
//     let result2 = await sleep(1000, 'req02' + result1);
//     let result3 = await sleep(500, 'req03' + result2);
//     console.log(`
//         ${result3}
//         ${result2}
//         ${result1}
//     `);
// }

// test();
// function sleep(second) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           // resolve('可乐睡觉')
//            reject('可乐不睡觉')
//         }, second);
//     })
// }

// async function errorDemo() {
//     let result = await sleep(1000);
//     console.log(result);
// }
// errorDemo();// VM706:11 Uncaught (in promise) want to sleep~

// // 为了处理Promise.reject 的情况我们应该将代码块用 try catch 包裹一下
// async function errorDemoSuper() {
//     try {
//         let result = await sleep(1000);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// errorDemoSuper();// want to sleep~



// function sleep(second) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log('request done! ' + Math.random()));
//         }, second);
//     })
// }

// async function bugDemo() {
//     await sleep(1000);
//     await sleep(1000);
//     await sleep(1000);
//     console.log('clear the loading~');
// }

// bugDemo();
// async function correctDemo() {
//     let p1 = sleep(1000);
//     let p2 = sleep(1000);
//     let p3 = sleep(1000);
//     await Promise.all([p1, p2, p3]);
//     console.log('clear the loading~');
// }
// correctDemo();// clear the loading~



// // 正常 for 循环
// async function forDemo() {
//     let arr = [1, 2, 3, 4, 5];
//     for (let i = 0; i < arr.length; i ++) {
//         await arr[i];
//     }
// }
// forDemo();//正常输出
// 因为想要炫技把 for循环写成下面这样
// async function forBugDemo() {
//     let arr = [1, 2, 3, 4, 5]
//     arr.forEach(item => {
//       await item
//     })
// }
// forBugDemo();// Uncaught SyntaxError: Unexpected identifier


    }
	}
</script>
<style lang="stylus" scoped>

</style>