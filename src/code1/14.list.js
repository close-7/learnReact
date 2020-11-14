import React from 'react'
import ReactDOM from 'react-dom'

const numbers = [1, 2, 3, 4, 5];

// function ListItem(props){
//     正确！这里不需要指定 key：
//     return <li>{props.value}</li>;
// }

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // key 帮助 React 识别哪些元素改变了，比如被添加或删除
        // 一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串
        // 万不得已你可以使用元素索引 index 作为 key

        // 正确！key 应该在数组的上下文中被指定
        // 元素的 key 只有放在就近的数组上下文中才有意义。
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>

        // 嵌入任何表达式
        // <ul>
        //     {numbers.map((number) =>
        //         <ListItem key={number.toString()}
        //             value={number} />
        //     )}
        // </ul>
    );
}

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);
