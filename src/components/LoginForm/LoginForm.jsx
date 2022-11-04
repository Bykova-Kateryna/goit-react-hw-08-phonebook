
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LoginFormSection, LoginFormLabel, LoginFormInput, LoginFormButton} from './LoginForm.styled'
const LoginForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch()

  const handleChange = (e) => {
    switch(e.target.name){
      case 'email':
        setUserEmail(e.target.value)
        break;
      case 'password':
        setUserPassword(e.target.value)
        break;
      default: return;
    }
  }
  
const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const user = {
      email: userEmail,
      password: userPassword
    };
    if(userEmail === "" && userPassword === ""){
      return Notify.failure('Please fill in all fields!');
    }
    else {
      dispatch(logIn(user))
      form.reset();
      setUserEmail('')
      setUserPassword('')
    }
  }

  return (
<div>
<LoginFormSection>
      <LoginFormLabel onSubmit={handleSubmit}>
        Email
        <LoginFormInput type="email" name="email" onChange={handleChange}/>
      </LoginFormLabel>
      <LoginFormLabel>
        Password
        <LoginFormInput type="password" name="password" onChange={handleChange}/>
      </LoginFormLabel>
      <LoginFormButton type="submit">Login</LoginFormButton>
    </LoginFormSection>
</div>
    

  );
}

export default LoginForm;