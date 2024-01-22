import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";



const PrivateRouter = () => {

    const {user} = useSelector((state) => state.user);
  return (
    user ? <Outlet/> : <Navigate to="/sign-in"/>
  )
}

export default PrivateRouter
