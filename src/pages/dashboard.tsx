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
       <div className="thumbnail"> my profile </div>
       <div className="thumbnail"> order history </div>
       <div className="thumbnail"> Change password </div>
        
    </div>
  )
}
export default Dashboard