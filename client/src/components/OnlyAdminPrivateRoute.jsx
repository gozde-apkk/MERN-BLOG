import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const OnlyAdminPrivateRoute = () => {
  const { user } = useSelector((state) => state.user);
  console.log("OnlyAdminPrivateRoute", user.currentUser);
  return  user.currentUser.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to='/sign-in' />
  );
}

export default OnlyAdminPrivateRoute;