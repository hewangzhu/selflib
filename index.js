// js 全局变量 Douglas js bad parts 减少空间污染
const Song = {
    // es6    es5(trim:function(){})
    trim(str,n){ //去除空格
        // trim 有兼容性
        // return str.trim();
        // \s表空格  \d表数字
        // /regExp对象/ + 出现一次或多次 贪婪匹配
        // 正则后加g 表全局匹配
        // { 1 去除前后空格
        //   2 去除左边空格
        //   3 去除右边空格
        //   4 去除所有空格  }
       switch(n){
           case 1: return str.replace(/(^\s+)|(\s+$)/g,"#");
           case 2: return str.replace(/(^\s+)/g,"#");
           case 3: return str.replace(/(\s+$)/g,"#");
           case 4: return str.replace(/\s+/g,"#");
       }
        // return str.replace(/(^\s+)|(\s+$)/,"");
        // return str.replace(/(^\s+)/,"");
        // return str.replace(/(\s+$)/,"");
        // return str.replace(/\s/g,"");
    }
};
// const strHello = 'Hello Baidu!';
// console.log(strHello.replace('Baidu','Google'))
// console.log(Song.trim(" mel ody "));
console.log(Song.trim("  hello world ",1));
console.log(Song.trim("  hello world ",2));
console.log(Song.trim("  hello world ",3));
console.log(Song.trim("  hello world ",4));

// 立即执行函数的妙用，对象的封装。
// 方便的提供私有属性或方法
// const user = (function(){
//     let _name = 'sven', //以下划线开始为私有变量
//         _age = 18;
//     // 闭包的魔法
//     return {
//         // 形成了闭包(closure)  函数运行时的上下文环境
//         getUserInfo:function(){
//             return _name + ',年方' + _age;
//         }
//     }
//     // return undefined; //当为空时  默认值
// })();
// 立即执行函数已经执行，但是它的内部返回，
// 可以在任何时刻被执行。
// 上下文环境(context)
// 立即函数立即执行的 闭包函数被定义，引用的变量，函数都可以被调用
// 在闭包的夹层里的变量得永生
// console.log(user.getUserInfo());

// ! 将与上述代码隔断
// !(function() {
//     window.Teel = {
//         sayHell:function(){
//             console.log('Hello Word!')
//         }
//     }
// })();

// !(function(global) {
//     global.Teel = {
//         sayHell:function(){
//             console.log('Hello Word!')
//         }
//     }
// })(window);





