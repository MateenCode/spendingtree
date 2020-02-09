import React from "react";

import {
  HeaderContainer,
  SpendingTree,
  HeaderTwo,
  HeaderFour,
  Span
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <SpendingTree />
      <HeaderFour>
        Please fill <Span>out details below</Span> so we can get you best rate!
      </HeaderFour>
      <HeaderTwo>Get Pre Approved for auto loan today! </HeaderTwo>
    </HeaderContainer>
  );
};

export default Header;
