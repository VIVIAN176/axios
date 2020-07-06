//GET1
axios.get('/user?ID=12345')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
//GET1
axios.get('/user', {
    params: {
        ID: 1234
    }
})
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })
//GET使用
axios({
    method: 'get',
    url: '/xxx',
    responseTpye: 'stream'
})
    .then(function () {
        response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    })


//POST请求
axios.post('/user', {
    firstname: 'deshou',
    lastname: 'zhang'
})
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })

axios({
    method: 'post',
    url: '/user',
    data: {
        firstname: 'deshou',
        lastname: 'zhang'
    }
})

//并行请求
function getUserAccount() {
    return axios.get('/user/123')
}

function getUserPermissions() {
    return axios.get('/user/1243/permissions')
}
axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
        //当两个请求都完成时
    }))