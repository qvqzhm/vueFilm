

let state = {
    hasLogin:false
}

let mutations = {
    CHANGELOGIN(state,data){
        state.hasLogin = data
    }
}

let actions = {

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