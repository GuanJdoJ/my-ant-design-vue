import Vue from 'vue';
import Vuex from 'vuex';

//使用vuex
Vue.use(Vuex);

const state = {
    count:1,
}

const getters = {
    getCount(state){
        return state.count;
    }
}

const mutations = {
    add(state,n=0){
        state.count += Number(n);
    },
    reduce(state,n=0){
        state.count -= Number(n);
    }
}

const actions = {
    addFun(context,n=0){
        context.commit("add",n);
    },
    reduceFun(context,n=0){
        context.commit("reduce",n);
    }
}

//创建vuex实例
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})

export default store;