import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  LoginFormSection,
  LoginFormLabel,
  LoginFormInput,
  LoginFormButton,
  LoginFormContainer,
} from './LoginForm.styled';
import { Loader } from 'components/Loader/Loader';
const LoginForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading)

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setUserEmail(e.target.value);
        break;
      case 'password':
        setUserPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const user = {
      email: userEmail,
      password: userPassword,
    };
    if (userEmail === '' && userPassword === '') {
      return Notify.failure('Please fill in all fields!');
    } else {
      dispatch(logIn(user));
      form.reset();
      setUserEmail('');
      setUserPassword('');
    }
  };

  return (
    <LoginFormContainer>
      {loading ? <Loader/> : <LoginFormSection onSubmit={handleSubmit}>
        <LoginFormLabel>
          Email
          <LoginFormInput type="email" name="email" onChange={handleChange} />
        </LoginFormLabel>
        <LoginFormLabel>
          Password
          <LoginFormInput
            type="password"
            name="password"
            onChange={handleChange}
          />
        </LoginFormLabel>
        <LoginFormButton type="submit">Login</LoginFormButton>
      </LoginFormSection>}
    </LoginFormContainer>
  );
};

export default LoginForm;
