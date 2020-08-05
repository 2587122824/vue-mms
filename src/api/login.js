import request from '@/utils/request'

export function login(username,password) {
    request({
        url:'/user/login',
        method:'post',
        data:{
            username,
            password
        }
    })
}

export function getUserInfo(token) {
    request({
        url:`/user/info/${token}`,
        method: 'get',
    })
}