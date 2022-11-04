import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { PhoneBoockContainer } from './Phonebook/Phonebook.styled';
import Header from './Header/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/operations'


const HomePage = lazy(() => import('./HomePage/HomePage'));
const RegisterForm = lazy(() => import('./RegisterForm/RegisterForm'));
const LoginForm = lazy(() => import('./LoginForm/LoginForm'));
const PhoneBookSection = lazy(() => import('./Phonebook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getUser())
}, [dispatch])
  
  return (
    <PhoneBoockContainer>
    <Routes>
      <Route path="/" element={<Header />}>
      <Route index element={<HomePage />}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/contacts" element={<PhoneBookSection />}/>
      </Route>
    </Routes>
      <GlobalStyle />
    </PhoneBoockContainer>
  );
};
