import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation Mutation($email: String!, $password: String!, $cc: CC!) {
    signUpUser(email: $email, password: $password, cc: $cc) {
      email
      cc
      id
    }
  }
`;

export const LOGIN_QUERY = gql`
  query Query($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const USER_ROLE_QUERY = gql`
  query Query($role: UserRoles!) {
    getUsersByRole(role: $role) {
      email
      id
    }
  }
`;

export const USER_ID_QUERY = gql`
  query Query($id: String!) {
    getUserById(id: $id) {
      id
      email
      cc
      name
      bio
      role
      teams {
        name
      }
      projects {
        name
      }
      projectsOwned {
        name
      }
    }
  }
`;

export const GET_USER_CHATS_QUERY = gql`
  query Query {
    getOwnChats {
      id
      from
      to
      channel
      message
    }
  }
`;

export const SEND_MESSAGE_MUTATION = gql`
  mutation Mutation(
    $message: String!
    $recipientEmail: String
    $channel: ChatChannels
  ) {
    sendMessage(
      message: $message
      recipientEmail: $recipientEmail
      channel: $channel
    ) {
      id
      to
      channel
      message
    }
  }
`;
