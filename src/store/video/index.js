import {reqVideo,reqMVideo} from "@/api";

let state = {
    tjVideo:[],
    vItem:{},
    mvList:[],
    mvItem:{}
}

let mutations = {
    GETVIDEO(state,data){
        state.tjVideo = data.feeds
    },
    GETVITEM(state,item){
        state.vItem = item
    },
    GETMV(state,data){
        state.mvList = data.feeds
    },
    GETMVITEM(state,data){
        state.mvItem = data
    }
}

let actions = {
    async getVideo({commit},id){
        let res = await reqVideo(...id)
        if (res.success){
            commit('GETVIDEO',res.data)
        }
    },
    async getMV({commit}){
        let res = await reqMVideo()
        if (res.success){
            commit('GETMV',res.data)
        }
    }
}

let getters = {

}

export default {
    // namespaced:true,
    state,
    mutations,
    actions,
    getters
}