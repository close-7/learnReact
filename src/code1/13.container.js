import React from 'react'
import ReactDOM from 'react-dom'

function UserGreeting(props) {
    return <h1>欢迎回来！</h1>;
}

function GuestGreeting(props) {
    return <h1>请登录</h1>;
}

// 条件渲染 if
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
// ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}
// 隐藏组件，即使它已经被其他组件渲染
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

// 元素变量
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick=()=> {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick=()=> {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        // 三目运算符 condition ? true : false。
        let button = this.state.isLoggedIn ? 
        <LogoutButton onClick={this.handleLogoutClick} />:
            <LoginButton onClick={this.handleLoginClick} />;
        // if (isLoggedIn) {
        //     button = <LogoutButton onClick={this.handleLogoutClick} />;
        // } else {
        //     button = <LoginButton onClick={this.handleLoginClick} />;
        // }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}


                {/* 与运算符 && */}
                {/* true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。 */}
                { isLoggedIn && 
                    <WarningBanner />
                }


                {/* 三目运算符 condition ? true : false。 */}
                {/* {isLoggedIn
                    ? <LogoutButton onClick={this.handleLogoutClick} />
                    : <LoginButton onClick={this.handleLoginClick} />
                } */}


            </div>
        );
    }
}
ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);


