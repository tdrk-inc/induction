import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      content
      account {
        id
        name
      }
    }
  }
`;
