/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload promise that resolves an object containing `stream`, `filename`, `mimetype` and `encoding`. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  addTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
};


export type MutationAddTodoArgs = {
  type: Scalars['String'];
};


export type MutationUpdateTodoArgs = {
  id: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Maybe<Todo>>>;
};


export type QueryTodoArgs = {
  id: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['String'];
  type: Scalars['String'];
};

export type TodoPartsFragment = { __typename?: 'Todo', id: string, type: string } & { ' $fragmentName'?: 'TodoPartsFragment' };

export type TodoTypeFragment = { __typename?: 'Todo', type: string } & { ' $fragmentName'?: 'TodoTypeFragment' };

export type AddTodoMutationVariables = Exact<{
  type: Scalars['String'];
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo?: (
    { __typename?: 'Todo', id: string }
    & { ' $fragmentRefs'?: { 'TodoPartsFragment': TodoPartsFragment } }
  ) | null };

export type GetTodoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoQuery = { __typename?: 'Query', todos?: Array<(
    { __typename?: 'Todo', id: string }
    & { ' $fragmentRefs'?: { 'TodoPartsFragment': TodoPartsFragment } }
  ) | null> | null };

export type GetTodoTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoTypeQuery = { __typename?: 'Query', todos?: Array<(
    { __typename?: 'Todo' }
    & { ' $fragmentRefs'?: { 'TodoTypeFragment': TodoTypeFragment } }
  ) | null> | null };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['String'];
  type: Scalars['String'];
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: (
    { __typename?: 'Todo', id: string }
    & { ' $fragmentRefs'?: { 'TodoPartsFragment': TodoPartsFragment } }
  ) | null };

// export const TodoPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Todo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<TodoPartsFragment, unknown>;
// export const TodoTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodoType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Todo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<TodoTypeFragment, unknown>;
// export const AddTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TodoParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Todo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<AddTodoMutation, AddTodoMutationVariables>;
// export const GetTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTodo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TodoParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Todo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<GetTodoQuery, GetTodoQueryVariables>;
// export const GetTodoTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTodoType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TodoType"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodoType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Todo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<GetTodoTypeQuery, GetTodoTypeQueryVariables>;
// export const UpdateTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TodoParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Todo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const TodoPartsFragmentDoc = gql`
    fragment TodoParts on Todo {
  id
  type
}
    `;
export const TodoTypeFragmentDoc = gql`
    fragment TodoType on Todo {
  type
}
    `;
export const AddTodoDocument = gql`
    mutation AddTodo($type: String!) {
  addTodo(type: $type) {
    id
    ...TodoParts
  }
}
    ${TodoPartsFragmentDoc}`;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const GetTodoDocument = gql`
    query getTodo {
  todos {
    id
    ...TodoParts
  }
}
    ${TodoPartsFragmentDoc}`;

/**
 * __useGetTodoQuery__
 *
 * To run a query within a React component, call `useGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodoQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
      }
export function useGetTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
        }
export type GetTodoQueryHookResult = ReturnType<typeof useGetTodoQuery>;
export type GetTodoLazyQueryHookResult = ReturnType<typeof useGetTodoLazyQuery>;
export type GetTodoQueryResult = Apollo.QueryResult<GetTodoQuery, GetTodoQueryVariables>;
export const GetTodoTypeDocument = gql`
    query getTodoType {
  todos {
    ...TodoType
  }
}
    ${TodoTypeFragmentDoc}`;

/**
 * __useGetTodoTypeQuery__
 *
 * To run a query within a React component, call `useGetTodoTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodoTypeQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoTypeQuery, GetTodoTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoTypeQuery, GetTodoTypeQueryVariables>(GetTodoTypeDocument, options);
      }
export function useGetTodoTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoTypeQuery, GetTodoTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoTypeQuery, GetTodoTypeQueryVariables>(GetTodoTypeDocument, options);
        }
export type GetTodoTypeQueryHookResult = ReturnType<typeof useGetTodoTypeQuery>;
export type GetTodoTypeLazyQueryHookResult = ReturnType<typeof useGetTodoTypeLazyQuery>;
export type GetTodoTypeQueryResult = Apollo.QueryResult<GetTodoTypeQuery, GetTodoTypeQueryVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: String!, $type: String!) {
  updateTodo(id: $id, type: $type) {
    id
    ...TodoParts
  }
}
    ${TodoPartsFragmentDoc}`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;