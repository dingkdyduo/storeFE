import axios from 'axios';

export default class apiCall {

    public apiHost:string = ""

    constructor(apiHost:string){
      this.apiHost= apiHost
    }

    postRec(path:string,params:any): Promise<any> {
		const url: string =  `${this.apiHost}${path}`
	 

		return axios
			.post(url, params, {
				headers: {
					'Content-Type': 'application/json',
					 //Authorization: `Bearer ${token}`,
				},
			})
			.then( response => {
				return   response
			})
			.catch((error) => {
				console.warn(error, '<<<< API ERROR');
				return  error 
			});
	}

    patchRec(path:string,params:any): Promise<any> {
		const url: string =  `${this.apiHost}${path}`
		return axios
			.patch(url, params, {
				headers: {
					'Content-Type': 'application/json',
					 //Authorization: `Bearer ${token}`,
				},
			})
			.then( response => {
				return   response
			})
			.catch((error) => {
				console.warn(error, '<<<< API ERROR');
				return  error 
			});
	}


    deleteRec(path:string): Promise<any> {
		const url: string =  `${this.apiHost}${path}`
	
		return axios
			.delete(url, {
				headers: {
					'Content-Type': 'application/json',
					 //Authorization: `Bearer ${token}`,
				},
			})
			.then( response => {
				return   response
			})
			.catch((error) => {
				console.warn(error, '<<<< API ERROR');
				return  error 
			});
	}


    getAll(path:string): Promise<any> {
		const url: string =  `${this.apiHost}${path}`
		return axios
			.get(url,{
				headers: {
					'Content-Type': 'application/json',
					 //Authorization: `Bearer ${token}`,
				},
			})
			.then( response => {
				return   response
			})
			.catch((error) => {
				console.warn(error, '<<<< API ERROR');
				return  error 
			});
	}

	filtered(path:string, param : object = {}): Promise<any> {
		const url: string =  `${this.apiHost}${path}`
		let result =axios
			.post(url, param ,{
				headers: {
					'Content-Type': 'application/json',
					 //Authorization: `Bearer ${token}`,
				},
			})
			.then( response => {
				return   response
			})
			.catch((error) => {
				console.warn(error, '<<<< API ERROR');
				return  error 
			});
		return result;
	}
}