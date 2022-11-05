import styled from 'styled-components';

export const PhoneBoockContainer = styled.section`
  padding: 15px;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(https://emaven.pl/assets/images/news/kontakti.jpg);
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
`;

export const ContactsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const PhoneBookFormTittle = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin-top: 20px;
`;
