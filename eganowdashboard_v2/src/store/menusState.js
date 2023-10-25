const state = {
    menuItems : [

    ]


}
const getters = {
    getMenuItems(state)  {
        return state.menuItems
    }
}

const mutations = {
  AddOrUpdateMenuItems(state,menuItems){
      state.menuItems = menuItems
  }
}
const actions = {
   setMenuItems({commit},menuItems){
       commit("AddOrUpdateMenuItems", menuItems);
   }
}



export default {
    state,getters,actions,mutations
}