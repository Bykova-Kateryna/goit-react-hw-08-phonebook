import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { HeaderContainer, Link } from './Header.styled';
import { useSelector } from 'react-redux';
import LogOutSection from '../LogOutSection/LogOutSection';
import { getUser } from '../../redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <HeaderContainer>
        <Link to="/" end>
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/contacts">My Contacts</Link>
            <LogOutSection />
          </>
        ) : (
          <>
            <Link to="/register">Registration</Link>
            <Link to="/login">LogIn</Link>
          </>
        )}
      </HeaderContainer>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Header;
