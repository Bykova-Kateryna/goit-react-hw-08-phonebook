import styled from 'styled-components';

export const HomePageSection = styled.section`
width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(https://graphicsland.ru/wp-content/uploads/social_icons_circle_color.png);
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
    text-align: center;
`;

export const HomePageTittle = styled.h1`
font-size: 70px;
  font-weight: 600;
  background-image: radial-gradient(ellipse, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

export const HomePageSectionContent = styled.div`
position: fixed;
`