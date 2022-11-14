import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/operations';
import {
  RegisterFormSection,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterFormButton,
  RegisterFormContainer,
} from './RegisterForm.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { LoaderFromLoginForm } from 'components/Loader/LoaderFromLoginForm';
const RegisterForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  // console.log(userPassword.length)
  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setUserName(e.target.value);
        break;
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
    const user = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    if (userName === '' && userEmail === '' && userPassword === '') {
      return Report.failure(
        'Something went wrong',
        'Please fill in all fields!',
        'Okay'
      );
    }
    if (userPassword.length < 7) {
      return Report.failure(
        'PASSWORD',
        'minimum length is 7 characters!',
        'Okay'
      );
    } else {
      dispatch(register(user));;
    }
  };

  return (
    <RegisterFormContainer>
        <RegisterFormSection onSubmit={handleSubmit}>
          <RegisterFormLabel>
            Name
            <RegisterFormInput
              type="text"
              name="name"
              onChange={handleChange}
            />
          </RegisterFormLabel>
          <RegisterFormLabel>
            Email
            <RegisterFormInput
              type="email"
              name="email"
              onChange={handleChange}
            />
          </RegisterFormLabel>
          <RegisterFormLabel>
            Password
            <RegisterFormInput
              type="password"
              name="password"
              onChange={handleChange}
              minlength="7"
            />
          </RegisterFormLabel>
          <RegisterFormButton type="submit"> {loading ? <LoaderFromLoginForm /> : 'Registration'}</RegisterFormButton>
        </RegisterFormSection>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
