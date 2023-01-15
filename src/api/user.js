import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/adminapi/login/adminLogin',
        method: 'post',
        data
    })
}

export function getInfo() {
    return request({
        url: '/adminapi/login/getAdminInfo',
        method: 'get'
    })
}

export function getLoginCaptcha() {
    return request({
        url: '/adminapi/login/getAdminCaptcha',
        method: 'get'
    })
}

export function logout() {
    return request({
        url: '/adminapi/login/adminLogout',
        method: 'get'
    })
}

export function getAdminRules() {
    return request({
        url: '/adminapi/rules/ruleList',
        method: 'get'
    })
}
