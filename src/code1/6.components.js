import React from 'react'
import ReactDOM from 'react-dom'
// 组件分为两种  函数组件(函数) function 类组件 class

// 函数组件中没有this 没有生命周期 没有状态
// 函数就是一个合法的组件 props 属性对象
function Welconme(props){
    console.log(props)
    // { name: "qiufeng" }
    //     age: "26"
    //     name: "qiufeng"
    //     __proto__: Object
    return (
        <h1>hello,{props.name}</h1>
    )
}
//可以通过作用域链
// function returnWelcome(){
//     return <Welconme name="qiufeng" age="26" />
// }
// let element = returnWelcome();

// 组合组件
function App(){
    return(
        <div>
            <Welconme name="qiufeng1" />
            <Welconme name="qiufeng2" />
            <Welconme name="qiufeng3" />
        </div>
    )
}
let element = App();

/**
 * 组件的运行方式
 * 1.render发现一个用户自定义组件，如果标签名是以大写字母开头就是用户自定义组件，如果
 * 小写字母开头就是dom组件
 * The tag <welconme> is unrecognized in this browser. If you meant to render a React component,
 * start its name with an uppercase letter.
 * welcome标签不能在浏览器识别。如果你想渲染一个dom组件，请用大写字母命名它
 * 2. 先把JSX的属性封装成一个props对象{name:"qiufeng",age:"18"}
 * 3. 把它作为参数传递给Welcome函数，获取一个返回值，返回值是一个react元素
 * 4. render方法会把此react元素渲染到页面上
 */
ReactDOM.render(element,document.getElementById('root'))
// 当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）
// 以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。



