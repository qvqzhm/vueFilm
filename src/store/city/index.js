import {reqCity,reqMaizuoCity} from "@/api";

let state = {
    cityId:20,
    cityList:[],
    cityActive:'广州',
    cityListPY:[],
    cityIndex:[],
    maizuocity:[],
    maizuoId:440100
}

let mutations = {
    GETCITY(state,res){
        state.cityList = res
    },
    CHANGECITY(state,data){
        let [id,name] = data
        state.cityId = id
        state.cityActive = name
    },
    GETMAIZUOCITY(state,res){
        state.maizuocity = res.cities
    },
    MAIZUOID(state,id){
        state.maizuoId = id
    }
}

let actions = {

    //city
    async getCity({commit}){
        let res = await reqCity()
        commit('GETCITY',res)
    },

    async getMaizuoCity({commit}){
        let res = await reqMaizuoCity()
        if (res.status === 0){
            commit('GETMAIZUOCITY',res.data)
        }
    }
}

let getters = {
    getCityPT(state){
        state.cityIndex = []
        state.cityListPY = []
        for (let i = 65;i<91;i++){
            state.cityIndex.push(String.fromCharCode(i))
        }

        for (let k = 0;k<27;k++){
            let list = state.cityList.filter(item =>{
                return item.py[0].toUpperCase() === state.cityIndex[k]
            })
            if (list.length>0){
                state.cityListPY.push({
                    type:state.cityIndex[k],
                    city: list
                })
            }
        }
        state.cityIndex =  state.cityListPY.map(item=>item.type)

        return {
            cityIndex:state.cityIndex,
            cityPY:state.cityListPY
        }
    }

}

export default {
    // namespaced:true,
    state,
    mutations,
    actions,
    getters
}