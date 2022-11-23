import {reqHot,reqCinema,reqChangeCinema,reqComming,reqMore} from "@/api";

let state = {
    hotList : [],
    cinemaList:[],
    changeCinema:{},
    commingList:{},
    moreList:[]
}

let mutations = {
    GETHOT(state,res){
        state.hotList = res
    },
    GETCINEMA(state,res){
        state.cinemaList = res.cinemas
    },
    GETCHANGECINEMA(state,res){
        state.changeCinema = res
    },
    GETCOMMING(state,res){
        state.commingList = res
    },
    GETMORE(state,res){
        state.moreList = res
    }
}

let actions = {
    // hot
    async getHot({commit},id){
        let result = await reqHot(id)
        commit('GETHOT',result)
    },

    //cinema
    async getCinema({commit},id){
        let result = await reqCinema(id)
        if (result.status == 0){
            commit('GETCINEMA',result.data)
        }
    },

    //changeCinema
    async getChangeCinema({commit},id){
        let res = await reqChangeCinema(id)
        if (res.success){
            commit('GETCHANGECINEMA',res)
        }
    },

    //comming
    async getComming({commit},id){
        let res = await reqComming(id)
        // if (res.success){
            commit('GETCOMMING',res)
        // }
    },

    async getMore({commit},id){
        let res = await reqMore(id)
        commit('GETMORE',res.coming)
    }

}

let getters = {
    getCinemaCity(state) {
        return state.changeCinema.district || {}
    },
    getCinemaBus(state) {
        return state.changeCinema.subway || {}
    },
    getCinemaPP(state){
        return state.changeCinema.brand || {}
    },
    getCinemaType(state){
        return state.changeCinema.hallType || {}
    },
    getCinemaService(state){
        return state.changeCinema.service || {}
    },
    getHotList(state){
        return state.hotList
    },
    getMovieId(state){
        return state.hotList.movieIds
    }
}

export default {
    // namespaced:true,
    state,
    mutations,
    actions,
    getters
}