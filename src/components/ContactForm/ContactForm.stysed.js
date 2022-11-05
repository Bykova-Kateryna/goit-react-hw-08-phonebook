import styled from 'styled-components';

export const ContactFofmSection = styled.div`
  background-color: tranperent;
  max-width: 400px;
  padding: 15px;
  margin-top: 20px;
`;

export const Fofm = styled.form`
  background: rgba(200, 205, 206, 0.6);
  border-radius: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 20px;
`;

export const FormLabel = styled.label`
  margin-right: 15px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 14px;
`;

export const FormInput = styled.input`
  display: block;
  padding: 0 15px;
  border-width: 0;
  line-height: 25px;
  border-radius: 20px;
  color: #000;
  background: rgba(255, 255, 255, 0.2);
  font-family: 'Roboto', sans-serif;
  &:hover,
  &:focus {
    border: 2px solid #fff;
  }
`;
export const FormBtn = styled.button`
  width: 75%;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  border-radius: 20px;
  border-width: 0;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;

  &:hover,
  &:focus {
    background: #fff;
    color: #00d0ff;
  }
`;
