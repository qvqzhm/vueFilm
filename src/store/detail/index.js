import {reqDetail} from "@/api";

let state = {
    film:{}
}

let mutations = {
    GETDETAIL(state,data){
        state.film = data
    }
}

let actions = {
    //detail
    async getDetail({commit},parme={}){
        let res = await reqDetail(parme.id)
        if (res){
            commit('GETDETAIL',res.detailMovie)
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