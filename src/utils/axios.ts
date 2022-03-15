/*
 * @description:
 * @Author: Gouxinyu
 * @Date: 2021-04-12 23:42:38
 */
import axios from "axios";
//创建axios的一个实例
var instance = axios.create({
    baseURL: "/api", //接口统一域名
    timeout: 6000, //设置超时
});

//------------------- 一、请求拦截器 忽略
instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

//----------------- 二、响应拦截器 忽略
instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        // 对响应错误做点什么
        console.log("拦截器报错");
        return Promise.reject(error);
    }
);

/**
 * 使用es6的export default导出了一个函数，导出的函数代替axios去帮我们请求数据，
 * 函数的参数及返回值如下：
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */
const proxyAxios = function (
    method: string,
    url: string,
    data: any = null
): Promise<any> {
    method = method.toLowerCase();
    if (method == "post") {
        return instance.post(url, data);
    } else if (method == "get") {
        return instance.get(url, { params: data });
    } else if (method == "delete") {
        return instance.delete(url, { params: data });
    } else if (method == "put") {
        return instance.put(url, data);
    }

    return instance.get(url, { params: data });
};

export function get(url: string, params?: any) {
    return proxyAxios("get", url, params);
}

export function post(url: string, params?: any) {
    return proxyAxios("post", url, params);
}

export default proxyAxios;
