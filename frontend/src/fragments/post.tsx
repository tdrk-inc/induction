import { gql } from "@apollo/client";

export const DISPLAY_POST = gql`
  fragment DisplayPost on Post {
    id
    content
    account {
      id
      name
    }
  }
`;

export const UPDATE_POST = gql`
  fragment UpdatePost on Post {
    id
    content
  }
`;
