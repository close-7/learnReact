# react 生命周期
参考./src/components/Counter
# 使用 PropTypes 进行类型检查
参考./src/components/Person
# 使用 Chrome 性能分析工具 分析组件性能 
1. 通过添加 ?react_perf 查询字段加载你的应用(例如：http://localhost:3000/?react_perf)。
2. 打开 Chrome DevTools Performance 并点击 Record 。timeline-tool
3. 执行你想要分析的操作，不要超过20秒，否则 Chrome 可能会挂起。
停止记录。
4. 在 User Timing 标签下，React事件将会分组列出。react-16

# 重写shouldComponentUpdate方法减少重新渲染
参考./src/components/Todos