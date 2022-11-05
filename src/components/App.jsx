import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { PhoneBoockContainer } from './Phonebook/Phonebook.styled';
import Header from './Header/Header';

import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const RegisterForm = lazy(() => import('./RegisterForm/RegisterForm'));
const LoginForm = lazy(() => import('./LoginForm/LoginForm'));
const PhoneBookSection = lazy(() => import('./Phonebook/Phonebook'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <PhoneBoockContainer>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<PhoneBookSection />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </PhoneBoockContainer>
  );
};
