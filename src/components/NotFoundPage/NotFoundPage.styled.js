import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NotFoundPageSection = styled.section`
  height: 100vh;
  width: 100%;

  text-align: center;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(https://assets.kompasiana.com/items/album/2021/08/14/images-6117992706310e0d285e54d2.jpeg?t=t&v=260);
`;

export const GoHomeButton = styled(NavLink)`
  display: block;
  width: 50%;
  color: #000;
  text-decoration: none;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  &:hover,
  &:focus {
    background: #fff;
    color: #00d0ff;
  }
`;
