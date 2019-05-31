import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV  === 'development'

export default () => {
    const store = new Vuex.Store({
        strict: isDev,
        state: defaultState,
        mutations,
        getters,
        actions
    })
    console.log('module.hot', module.hot);
    if (module.hot) {
        module.hot.accept([
            './state/state',
            './mutations/mutations',
            './getters/getters',
            './actions/actions'
        ], () => {
            const newStore = require('./state/state')
            const newMutations = require('./mutations/mutations')
            const newGetters = require('./getters/getters')
            const newActions = require('./actions/actions')

            store.hotUpdate({
                state: newStore,
                mutations: newMutations,
                getters: newGetters,
                actions: newActions
            })
        })
    }

    return store
    // return new Vuex.Store({
    //     strict: isDev,
    //     state: defaultState,
    //     mutations,
    //     getters,
    //     actions
    // })
}