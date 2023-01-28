import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  padding: 10px;
  display: flex;
`;

export const OptionBtn = styled.button`
  display: block;
  margin-right: 10px;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;
  background-color: white;
  &:active {
    background-color: yellow;
  }
`;
