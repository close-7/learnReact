import React from 'react'
import ReactDOM from 'react-dom'

function tick() {
    let clock = (
        <div>
            <h1>hello qiufeng</h1>
            <h2>{new Date().toLocaleString()}</h2>
        </div>
    )
    ReactDOM.render(clock, document.getElementById('root'));
}

setInterval(tick, 1000);

// React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。
// React DOM 只会更新实际改变了的内容，也就是例子中的文本节点。

// 根据我们的经验，考虑 UI 在任意给定时刻的状态，而不是随时间变化的过程