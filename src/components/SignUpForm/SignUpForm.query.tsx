import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!){
    createUser(createUserInput: $createUserInput) {
      _id
      name
      email
    }
  }
`

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!){
    updateUser(updateUserInput: $updateUserInput) {
        _id
        email
        name
    }
  }
`