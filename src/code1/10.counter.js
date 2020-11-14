import React from 'react'
import ReactDOM from 'react-dom'

class Count extends React.Component{
    constructor(props){
        super(props)
        this.state = { count:0,age:0}
    }
    //属性初始化是绑定this的最好方法
    click=()=>{
        //setState可能是异步的，另外setState有可能会合并
        // this.setState({
        //     count: this.state.count + this.props.increment
        // })
        // this.setState({
        //     count: this.state.count + this.props.increment
        // })

        // 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。
        // 这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
        // this.setState((prevState, props) => ({ count: prevState.count + Math.random() }))
        // this.setState((prevState, props) => ({ count: prevState.count + props.increment }))

        // 上述方法等同于 执行this.setState后再执行回调函数，异步转同步
        this.setState((prevState, props) => ({ count: prevState.count + Math.random() }),()=>{
            this.setState((prevState, props) => ({ count: prevState.count + props.increment }))
        })
    }
    clickAge=()=>{
        this.setState({age:this.state.age+1})

        // this.setState原理--浅拷贝
        // function setState(newState){
        //     let obj = Object.assign({},this.state,newState)
        //     this.state = obj;
        //     this.render()
        // }
    }
    render(){
        return(
            <div>
                <h1>count:{this.state.count}</h1>
                <h1>age:{this.state.age}</h1>
                <button onClick={this.click}>count+</button>
                <button onClick={this.clickAge}>age+</button>
            </div>
        )
    }
}
ReactDOM.render(
    <Count increment={2} />,
    document.getElementById('root')
);