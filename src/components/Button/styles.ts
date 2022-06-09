import styled from "styled-components";

type Props = {
  kind: "create" | "share" | "notification";
};

const bgs = {
  create: {
    background: "#01E053",
    color: "#05192d",
  },
  share: {
    background: "#5301E0",
    color: "white",
  },

  notification: {
    background: "#E05301",
    color: "white",
  },
};

export const ButtonComponent = styled.button<Props>`
  height: 3rem;
  width: 100%;
  padding: 0 16px;
  border-radius: 4px;

  background: ${({ kind }) => bgs[kind].background};
  color: ${({ kind }) => bgs[kind].color};

  font-size: 20px;
  font-weight: 500;

  border: none;
  cursor: pointer;

  &:hover {
    filter: opacity(0.9);
  }
`;
