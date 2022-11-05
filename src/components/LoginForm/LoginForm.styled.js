import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const LoginFormSection = styled.form`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 60px 50px;
  margin: 50px auto 0;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.6),
      rgba(47, 48, 58, 0.6)
    ),
    url(https://cdn-icons-png.flaticon.com/512/2885/2885526.png);
  background-position: center;
  background-size: cover;
`;

export const LoginFormLabel = styled.label`
  display: block;
  padding-left: 15px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
`;

export const LoginFormInput = styled.input`
  display: block;
  width: 100%;
  padding: 0 15px;
  margin: 10px 0 15px;
  border-width: 0;
  line-height: 40px;
  border-radius: 20px;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  font-family: 'Roboto', sans-serif;
`;

export const LoginFormButton = styled.button`
  width: 30%;
  padding: 8px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  border-radius: 20px;
  border-width: 0;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;

  &:hover,
  &:focus {
    background: #fff;
    color: #00d0ff;
  }
`;
