import styled from "styled-components";


export const ButtonDeleteHistory = styled.button`
  background: ${props => props.theme['gray-100']};
  cursor: pointer;
  color: ${props => props.theme['green-500']};
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  border: 0;
  font-weight: bold;
  transition: 0.1s;

  &:hover{
    background: ${props => props.theme['red-500']};
    color: ${props => props.theme['gray-100']};
  }
`