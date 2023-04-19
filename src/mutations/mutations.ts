import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export const GET_TODO = gql`
  query getTodo {
    todos {
      id
      type
    }
  }
`;
