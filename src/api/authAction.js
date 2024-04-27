import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'https://storeapi-opa9.onrender.com'

 
 
export const userLogin =
  async ( email, password ) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${backendURL}/users/login`,
        { username:email, password:password },
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', data.username)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return error.response.data.message
      } else {
        return error.message
      }
    }
  }
