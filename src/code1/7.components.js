// 提取组件
import React from 'react'
import ReactDOM from 'react-dom'

function formatDate(data){
    return data.toLocaleString()
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
                {/* {props.date} */}
            </div>
        </div>
    );
}
let data ={
    author:{
        avatarUrl:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
        name:'qiufeng',
    },
    text: '提取组件',
    date: new Date()
}


// let element = Comment(data);
// ReactDOM.render(element, document.getElementById('root'))
// 把data中的所有属性一一传递给props，等同于 author={data.author} data={data.data}
ReactDOM.render(<Comment {...data} />, document.getElementById('root'))