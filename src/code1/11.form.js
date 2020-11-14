import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component{
    //事件处理函数 事件对象 event并不是原生事件对象，而是react自己封装的
    handleSubmit=(event)=>{
        //阻止默认事件
        event.preventDefault();
    }
    //返回且只返回一个元素
    render(){
        return(
            <from onSubmit={this.handleSubmit}>
                用户名：<input type="text" />
                密码：<input type="text" />
                <input type="submit" />
            </from>
        )
    }
}



ReactDOM.render(
    <Form />,
    document.getElementById('root')
);