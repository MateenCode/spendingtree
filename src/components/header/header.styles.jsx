import styled from "styled-components";

import { ReactComponent as Logo } from "../../assests/logo.svg";

export const HeaderContainer = styled.div`
  text-align: center;
  background: none;
  cursor: pointer;
`;

export const SpendingTree = styled(Logo)`
  width: 25rem;
  height: 10rem;
`;

export const HeaderTwo = styled.h2`
  font-size: 4.8rem;
  font-family: "Georgia", "Times New Roman", Times, serif;
  font-weight: 400;
  line-height: 1.2;
`;

export const HeaderFour = styled.h4`
  font-size: 2rem;
  letter-spacing: 1px;
  margin: 12px auto;
  height: 3.6rem;
  line-height: 1.8;
`;

export const Span = styled.span`
  color: #08c177;
`;
