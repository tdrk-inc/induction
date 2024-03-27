import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type CreatePostInput = {
  basePostId?: InputMaybe<Scalars['Int']['input']>;
  content: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  removePost: Post;
  signup: Scalars['String']['output'];
  updatePost: Post;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationRemovePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignupArgs = {
  input: SignupAccountInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};

export type Post = {
  __typename?: 'Post';
  account: Account;
  accountId: Scalars['String']['output'];
  basePostId?: Maybe<Scalars['Int']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['Int']['output'];
  relatedPosts?: Maybe<Array<Post>>;
  updatedAt: Scalars['Timestamp']['output'];
};

export type Query = {
  __typename?: 'Query';
  getHello: Scalars['String']['output'];
  post: Post;
  posts: Array<Post>;
  signin: Scalars['String']['output'];
};


export type QueryPostArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySigninArgs = {
  input: SigninAccountInput;
};

export type SigninAccountInput = {
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignupAccountInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdatePostInput = {
  content: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};

export type SigninQueryVariables = Exact<{
  input: SigninAccountInput;
}>;


export type SigninQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'signin'>
);


export const SigninDocument = gql`
    query Signin($input: SigninAccountInput!) {
  signin(input: $input)
}
    `;

/**
 * __useSigninQuery__
 *
 * To run a query within a React component, call `useSigninQuery` and pass it any options that fit your needs.
 * When your component renders, `useSigninQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSigninQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSigninQuery(baseOptions: Apollo.QueryHookOptions<SigninQuery, SigninQueryVariables> & ({ variables: SigninQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SigninQuery, SigninQueryVariables>(SigninDocument, options);
      }
export function useSigninLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SigninQuery, SigninQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SigninQuery, SigninQueryVariables>(SigninDocument, options);
        }
export function useSigninSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SigninQuery, SigninQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SigninQuery, SigninQueryVariables>(SigninDocument, options);
        }
export type SigninQueryHookResult = ReturnType<typeof useSigninQuery>;
export type SigninLazyQueryHookResult = ReturnType<typeof useSigninLazyQuery>;
export type SigninSuspenseQueryHookResult = ReturnType<typeof useSigninSuspenseQuery>;
export type SigninQueryResult = Apollo.QueryResult<SigninQuery, SigninQueryVariables>;