import axios from 'axios'

import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const request = axios.create({
    timeout:5000,
})

request.interceptors.request.use(config=>{
    nprogress.start()
    return config
})

request.interceptors.response.use(req=>{
    nprogress.done()
    return req.data
},err=>{
    console.log(err)
})

export default request