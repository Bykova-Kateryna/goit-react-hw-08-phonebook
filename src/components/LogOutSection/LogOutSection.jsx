import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/operations';
import { LogOutButton } from './LogOutSection.styled';
import { Loader } from 'components/Loader/Loader';
const LogOutSection = () => {
  const user = useSelector(state => state.auth.user.email);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <p>
            Welcome, <span>{user}</span>
          </p>
          <LogOutButton type="button" onClick={() => dispatch(logOut())}>
            Log out
          </LogOutButton>
        </>
      )}
    </div>
  );
};

export default LogOutSection;
