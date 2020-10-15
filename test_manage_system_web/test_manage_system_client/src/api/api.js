import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let host = "http://localhost:8080"

// 获取主页信息

export const getindex = params => { return axios.get(`${host}/api/index/`, { params: params }) }

// 获取城市信息

export const getcity = params => { return axios.get(`${host}/api/city/`) }

// 获取详细信息

export const getdetail = params => { return axios.get(`${host}/api/detail/`, { params: params }) }

// 注册

export const postRegister = params => { return axios.post(`${host}/api/register/`, { params: params }) }

// 获取后台表格数据

export const sendJson = params => { return axios.get(`${host}/getJson`, { params: params }) }
