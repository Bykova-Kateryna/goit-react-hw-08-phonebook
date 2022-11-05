import styled from 'styled-components';

export const FilterSection = styled.div`
  background: rgba(200, 205, 206, 0.6);
  border-radius: 20px;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  max-width: 400px;
`;

export const FilterSectionLabel = styled.label`
  display: block;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
`;

export const FilterSectionInput = styled.input`
  display: block;
  padding: 0 15px;
  border-width: 0;
  line-height: 25px;
  border-radius: 20px;
  color: #000;
  background: rgba(255, 255, 255, 0.2);
  font-family: 'Roboto', sans-serif;
  margin-top: 10px;
  &:hover,
  &:focus {
    border: 2px solid #fff;
  }
`;
