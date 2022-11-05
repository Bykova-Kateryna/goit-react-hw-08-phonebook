// router
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute() {
  const isLogin = useSelector(state => state.auth.isLoggedIn);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
}
