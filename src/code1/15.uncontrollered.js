import React from 'react'
import ReactDOM from 'react-dom'
//非受控组件
// 非受控组件 1.可以操作dom 获取真实dom 
//           2.可以和第三方库结合
//           3.不需要对当前输入的内容进行校验，也不需要默认值
class Form extends React.Component {
    
    //事件处理函数 事件对象 event并不是原生事件对象，而是react自己封装的
    handleSubmit = (event) => {
        //阻止默认事件
        event.preventDefault();
        //通过ref获取输入的值 如果给input框赋了一个username的ref值，那么可以通过this.username获取对应的真实dom元素
        let username = this.username.value
        let password = this.password.value
        console.log(username, password)
    }
    //返回且只返回一个元素
    render() {
        return (
            //ref里如果放的是一个函数，那么此函数会在当此虚拟dom转成真实dom并插入到页面之后立刻调用，参数就是真实dom
            <form onSubmit={this.handleSubmit}>
                用户名：<input type="text" ref={input => this.username =input} />
                密码：<input type="text" ref={input => this.password = input} />
            
                <input type="submit" />
            </form>
        )
    }
}



ReactDOM.render(
    <Form />,
    document.getElementById('root')
);