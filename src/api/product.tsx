import apiCall from './axios'
import {config} from '../config/api'

const env:string  = process.env.NODE_ENV || "local"
const apiConfig = config[env]
const api = new apiCall(apiConfig.storeApiHost)

 

export  function getFilterProduct(params:object = {}): any {

    let path = "/products/filtered"
    // get data bu post with payload
    return api.filtered(path,params);

}