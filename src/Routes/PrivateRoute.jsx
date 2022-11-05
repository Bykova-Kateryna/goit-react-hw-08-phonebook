import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isLogin = useSelector(state => state.auth.isLoggedIn);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
