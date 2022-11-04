import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/operations'

const LogOutSection = () => {
  const user = useSelector(state => state.auth.user.email)
  const dispatch = useDispatch()
  return (
<div>
  <p>Welcome <span>{user}</span></p>
  <button type='button' onClick={dispatch(logOut)}>Logout</button>
</div>
    

  );
}

export default LogOutSection;