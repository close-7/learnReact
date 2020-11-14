import React from 'react'
import ReactDOM from 'react-dom'

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

// function tick(){

//     ReactDOM.render(
//         <Clock date={new Date() }/>,
//         document.getElementById('root')
//     );
// }
// setInterval(tick, 1000);




// 1.将函数组件转换成 class 组件
// 创建一个同名的 ES6 class ，并且继承于 React.Component。
// 添加一个空的 render() 方法。
// 将函数体移动到 render() 方法之中。
// 在 render() 方法中使用 this.props 替换 props。


// 2.向 class 组件中添加局部的 state
// 把 render() 方法中的 this.props.date 替换成 this.state.date 
// 添加一个 class 构造函数，然后在该函数中为 this.state 赋初值
// 将 props 传递到父类的构造函数中

// 3.将生命周期方法添加到 Class 中

// 我们的组件要继承React组件 因为react组件封装了很多方法 this.setState()
class Clock extends React.Component {
    constructor(props){
        super(props);
        //在构造函数内部定义初始的状态
        this.state = {date:new Date()}
        // 4.在构造函数里bind
        // this.tick = this.tick.bind(this)
    }
    //组件挂载完成，当react把一个虚拟dom转成真实dom之后，会执行此方法
    /**
     * 处理this的几种方法
     * 1.bind
     * 2.()=>{}使用方法调用-箭头函数
     * 3.定义tick的时候使用属性初始化方法-es7属性初始化
     * 4.在构造函数里bind
     */
    componentDidMount() {
        // 你可以向 class 中随意添加不参与数据流的额外字段。不需要在render()中使用的数据都可以放到实例上
        
        //1.bind
        //在生命周期函数中，this是指向当前组件实例的。所以绑定后，this.tick中的this指向当前实例
        // this.timerID = setInterval(this.tick.bind(this),1000)

        //2.()=>{}使用方法调用-箭头函数
        //根据箭头函数this是指向父作用域
        this.timerID = setInterval( //this，当前组件的实例
            () => this.tick(),
            1000
        );

        // 3. 定义tick的时候使用属性初始化方法
        // this.timerID = setInterval(this.tick,1000)
    }
    //当react组件准备销毁一个组件时，会提前调用此方法，进行一些资源的释放和清理工作
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    // 3. 定义tick的时候使用属性初始化方法
    //原理：es7属性初始化 就相当于绑定了this指针
    // tick=()=>{
    //     this.setState({
    //         date: new Date()
    //     });
    // }
    tick() {
        // setState可以更新页面
        //this.setState() 来时刻更新组件 state
        //调用此方法后，react会调用render()方法根据最新的状态进行重新渲染
        //需要处理this，如果不处理this--》null

        //1.永远不要直接修改state，应为这样的话不会重新调用render方法，界面不会刷新，那么状态和ui表现不一致
        //2.setState可能是异步的，另外setState有可能会合并--参考10.counter.js
        this.setState({
            date: new Date()
        });
    }
    //定义此组件如何渲染，其实就是要返回一个react元素
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

/**
 * 类组件的渲染过程
 * 1.当 <Clock /> 被传给 ReactDOM.render()后
 * 2.先封装props属性对象
 * 3.找到Clock类的定义，然后实例化Clock的实例 new Clock（props）
 * 4.调用Clock类实例的render方法，得到返回的react元素
 * 5.把此react元素渲染到页面中去，变成真实dom
 * 6.当渲染完成会调用didMount方法创建一个定时器赋给实例的timerID属性
 * 7.每秒钟，调用一次tick改变state，state改变之后触发重新render
 */

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

// 组件有两个数据源 一个是属性 外界传递的 props 还有一个叫状态是自己的 state



