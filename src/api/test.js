import request from '@/utils/request'

request.get('/db.json').then(res => {
    console.log(res.data);
})

request({
    method:'get',
    url:'/db.json'
}).then(res => {
    console.log(res.data);
})