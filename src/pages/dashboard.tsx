import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Dashboard = () => {
  const { isAuthenticated, user } = useSelector((state:any) => state.auth);
  const navigate = useNavigate()
  
  useEffect(() => {
    if (isAuthenticated==false) {
      navigate('/login')
    }
  }, [navigate, isAuthenticated])
  return (

     <div>
        <Link to="orders" >my profile </Link> 
        <Link to="orders" >Change password </Link> 
        <Link to="orders" > Login  here </Link> 
    </div>
  )
}
export default Dashboard