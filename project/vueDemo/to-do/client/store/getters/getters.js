export default {
    // 避免数据计算重复代码
    fullName (state) {
        return `${state.firstName} ${state.lastName}`
    }
}