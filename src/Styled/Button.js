import styled from 'styled-components';

const Button = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  &:hover {
    background: white;
    color: black;
  }
`;

export default Button;
