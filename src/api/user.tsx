import apiCall from './axios'
import {config} from '../config/api'

const env:string  = process.env.NODE_ENV || "local"
const apiConfig = config[env]
const api = new apiCall(apiConfig.storeApiHost)

export default function login(data: any): any {
    let path = "/users/login"
    let param =  { username:data.email, password:data.password }
    return api.postRec(path,param);
}
 