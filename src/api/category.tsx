import apiCall from './axios'
import {config} from '../config/api'

const env:string  = process.env.NODE_ENV || "local"
const apiConfig = config[env]
const api = new apiCall(apiConfig.storeApiHost)

export default function getAllCategory(): any {

    let path = "/category"
    return api.getAll(path);

}

export  function getFilterCategory(params:object = {}): any {

    let path = "/category/filtered"
    // get data bu post with payload
    return api.filtered(path,params);

}

export  function getFilterProduct(params:object = {}): any {

    let path = "/products/filtered"
    // get data bu post with payload
    return api.filtered(path,params);

}