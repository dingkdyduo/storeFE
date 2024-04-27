import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/authSlice'
import  userLogin  from '../api/user'



const Login = () => {
  const { isAuthenticated, user } = useSelector((state:any) => state.auth);
  const dispatch = useDispatch<any>();
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const submitForm = async (data:any) => {
    let res =  await  userLogin(data)
    let userInfo = res.data[0]
    dispatch(login({name:userInfo.fullname,avatar:userInfo.avatar}))
  }

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [navigate, user])
  return (

    <form onSubmit={handleSubmit(submitForm)}>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-input'
          {...register('email')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <button type='submit' className='button'>
        Login
      </button>
    </form>
  )
}
export default Login