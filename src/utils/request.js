import axios from "axios"

// axios.get('/db.json').then(function(res){
//     const data=res.data;
//     console.log(data);
// })

const request=axios.create({
    baseURL:'/',
    timeout:5000
})

request.get('/db.json').then(function(res){
    const data=res.data;
    console.log(data);
})

request.interceptors.request.use(config => {
    //请求拦截
    return config;
},err => {
    //出现异常
    return Promise.reject(err);
})

request.interceptors.response.use(response => {
    return response;
},err => {
    return Promise.reject(err);
})

export default request