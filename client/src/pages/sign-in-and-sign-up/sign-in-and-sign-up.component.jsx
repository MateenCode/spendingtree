import React from "react";

import SignUp from "../../components/sign-up/sign-up.component";

import { Container, SignUpTitle } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => {
  return (
    <>
      <Container>
        <SignUpTitle>Sign up with your email and password</SignUpTitle>
        <SignUp />
      </Container>
    </>
  );
};

export default SignInAndSignUpPage;
