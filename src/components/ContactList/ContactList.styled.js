import styled from 'styled-components';

export const ContactListSection = styled.ol`
  background: rgba(200, 205, 206, 0.6);
  border-radius: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 15px;
`;

export const ContactListItem = styled.li`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactListItemContext = styled.p`
  margin-right: 10px;
  color: #000;
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  border-width: 0;
  cursor: pointer;
  font-size: 24px;
  background: transparent;
  &:hover,
  &:focus {
    border: 1px solid #00d0ff;
    border-radius: 10px;
  }
`;
export const ErrorMesage = styled.p`
  color: #fff;
  text-transform: uppercase;
  text-decoration: underline overline #ff3028;
`;
export const ContactListMesage = styled.p`
  color: #fff;
  text-transform: uppercase;
`;
