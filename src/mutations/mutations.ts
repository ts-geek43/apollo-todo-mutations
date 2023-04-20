import { gql } from "@apollo/client";

export const FRAGMENT_TODO = gql`
  fragment TodoParts on Todo {
    id
    type
  }
`;

export const ADD_TODO = gql`
  ${FRAGMENT_TODO}
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      ...TodoParts
    }
  }
`;

export const GET_TODO = gql`
  ${FRAGMENT_TODO}
  query getTodo {
    todos {
      id
      ...TodoParts
    }
  }
`;

export const FRAGMENT_TODO_TYPE = gql`
  fragment TodoType on Todo {
    type
  }
`;

export const GET_TODO_TYPE = gql`
  ${FRAGMENT_TODO_TYPE}

  query getTodo {
    todos {
      ...TodoType
    }
  }
`;

export const UPDATE_TODO = gql`
  ${FRAGMENT_TODO}
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      ...TodoParts
    }
  }
`;
