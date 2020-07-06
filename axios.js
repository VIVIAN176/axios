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


//创建实例
var instance = axios.create({
    baseURl: 'https:xxxxx/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
})

//Response
axios.get('/user/12345')
    .then(function (response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    })

//Config
axios.defaults.baseURl = '/xxx';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var instance = axios.create({
    baseURl: 'https://xxx'
})

instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

var instance = axios.create();
instance.defaults.timeout = 2500;
instance.get('/longRequest', {
    timeout: 5000
})

//拦截器
//request interceptors
axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error)
    })

//response interceptors
axios.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)

//remove interceptor
var myInterceptors = axios.interceptors.request.use(
    function () {/*...*/ }
);
axios.interceptors.request.eject(myInterceptor);

var instance = axios.create();
instance.interceptors.request.use(() => { })


//错误处理
axios.get('/user/1234')
    .catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
        console.log(error.config)
    })
axios.get('/user/1235', {
    validateStatus: function (status) {
        return status < 500
    }
})






