import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const InfoKey = 'Admin-Info'
const MenuKey = 'MenuList'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function getAdminInfo()
{
    return Cookies.get(InfoKey)
}

export function setAdminInfo(adminInfo)
{
    return Cookies.set(InfoKey, adminInfo)
}

export function removeAdminInfo()
{
    return Cookies.remove(InfoKey)
}

export function getMenuList()
{
    return JSON.parse(localStorage.getItem(MenuKey))
}

export function setMenuList(menuList)
{
    return localStorage.setItem(MenuKey, menuList)
}

