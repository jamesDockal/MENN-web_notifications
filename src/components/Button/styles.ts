import styled from "styled-components";

export const ButtonComponent = styled.button`
  height: 3rem;
  background: #01e053;
  width: 100%;
  border: none;
  border-radius: 4px;
  color: #05192d;
  padding: 0 16px;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    filter: opacity(0.9);
  }
`;
