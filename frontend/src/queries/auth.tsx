import { gql } from "@apollo/client";

export const SIGNIN = gql`
  query Signin($input: SigninAccountInput!) {
    signin(input: $input)
  }
`;
