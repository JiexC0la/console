// 异步操作，一般处理请求数据

export default {
    updateCountSync (store, data) {
        setTimeout(() => {
            store.commit('updateCount', data.num)
        }, data.time)
    }
}