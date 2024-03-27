import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Signup($input: SignupAccountInput!) {
    signup(input: $input)
  }
`;

export const SIGNIN = gql`
  query Signin($input: SigninAccountInput!) {
    signin(input: $input)
  }
`;
