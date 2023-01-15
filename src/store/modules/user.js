import {setToken, setAdminInfo, getAdminInfo, getToken, getMenuList, setMenuList } from '@/utils/auth'

const state = {
    token: getToken(),
    adminInfo: getAdminInfo(),
    menuList: getMenuList()
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
        setToken(token)
    },
    SET_ADMIN_INFO: (state, adminInfo) => {
        state.adminInfo = adminInfo
        setAdminInfo(adminInfo)
    },
    SET_MENU_LIST: (state, menuList) => {
        state.menuList = menuList
        setMenuList(menuList)
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
