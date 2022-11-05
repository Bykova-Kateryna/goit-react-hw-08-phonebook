import styled from 'styled-components';

export const HomePageSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const HomePageTittle = styled.h1`
  font-size: 70px;
  font-weight: 600;
  background-image: radial-gradient(
    ellipse,
    #ada996,
    #f2f2f2,
    #dbdbdb,
    #eaeaea
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;
export const HomePageUserName = styled.p`
  font-size: 70px;
  font-weight: 600;
  background-image: radial-gradient(ellipse, #ffefba, #ffffff);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;
