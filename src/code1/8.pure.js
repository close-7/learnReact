/**
 * 纯函数
 * 1. 相同的输入一定会返回相同的输出
 */

let sum = (a,b) => a+b;
let getDate = a => a+Math.random();//不是纯函数

//纯函数，永远不能修改传进去的值
function withDraw(account,amount){
    account.balance -= amount
}
let account = {balance:200};
withDraw(account,100)
console.log(account)

// 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。