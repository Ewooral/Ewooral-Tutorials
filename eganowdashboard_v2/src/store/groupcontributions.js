
const state = {
    groupname : '',
    projectname : ''
}

const getters = {

    GetProjectName(state) {
        return state.projectname
    },
    GetGroupName(state) {
         return state.groupname
    }
}


const  mutations = {
    GET_PROJECT_NAME(state,payload) {

        state.projectname = payload

    },
    GET_GROUP_NAME(state, payload) {
       state.groupname = payload
    }
}


const actions = {

    SetProjectName({commit} , {projectname}) {
        commit('GET_PROJECT_NAME', {
             projectname : projectname
        })
    },
    SetGroupName({commit} , {groupname}) {
        commit('GET_GROUP_NAME', {
            groupname : groupname
        })
    }

}

export default {
    state,getters,mutations,actions
}