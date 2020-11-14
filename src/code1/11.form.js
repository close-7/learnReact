import React from 'react'
import ReactDOM from 'react-dom'
//受控组件 表单元素的值受组件的状态控制
// 使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。
// 被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            own:'xxxxx',
            eat:'lime'
        }
    }
    //处理变化
    handleChange=(key,event)=>{
        // let val = event.target.value
        // this.setState({[key]:val})
        // 同上 通过input上添加 name属性
        var name = event.target.name;
        var val = event.target.value
        if((/[a-zA-Z]+/.test(val))){
            this.setState({[name]:val});
        }else{
            
        }
    }
    //事件处理函数 事件对象 event并不是原生事件对象，而是react自己封装的
    handleSubmit=(event)=>{
        //阻止默认事件
        event.preventDefault();
        console.log(this.state )
    }
    //返回且只返回一个元素
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                用户名：<input type="text" name="username" onChange={e=>this.handleChange('username',e)} value={this.state.username} />
                密码：<input type="text" name="password" onChange={e => this.handleChange('password', e)} value={this.state.password}  />
                个人介绍：<textarea value={this.state.own} onChange={e => this.handleChange('own', e)} />
                 选择你喜欢的风味:
                {/* <select multiple={true} value={ }></select> 多选 */}
                <select value={this.state.eat} onChange={e => this.handleChange('eat', e)}>
                    <option value="grapefruit">葡萄柚</option>
                    <option value="lime">酸橙</option>
                    <option value="coconut">椰子</option>
                    <option value="mango">芒果</option>
                </select>
                
                <input type="submit" />
            </form>
        )
    }
}



ReactDOM.render(
    <Form />,
    document.getElementById('root')
);