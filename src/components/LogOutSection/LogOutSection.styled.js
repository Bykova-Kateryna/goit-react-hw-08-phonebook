import styled from 'styled-components';

export const LogOutContent = styled.p`
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

export const LogOutButton = styled.button`
  width: 30%;
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
