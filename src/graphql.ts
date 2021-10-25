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
    usersByRole(role: $role) {
      email
      id
    }
  }
`;

export const USER_ID_QUERY = gql`
  query Query($id: String!) {
    userById(id: $id) {
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

export const ALL_USERS_CHATS_QUERY = gql`
  query Query {
    allChats {
      id
      channel
      message
      from {
        email
      }
    }
  }
`;

export const GET_USER_CHATS_QUERY = gql`
  query Query {
    ownChats {
      id
      channel
      message
      from {
        id
        email
      }
      to {
        id
        email
      }
    }
  }
`;

export const PUBLIC_MESSAGES_SUBSCRIPTION = gql`
  subscription Subscription {
    subscribeToChannel {
      id
      channel
      message
      from {
        id
        email
      }
      to {
        id
        email
      }
    }
  }
`;

export const MESSAGE_QUERY = gql`
  query Query($id: String!) {
    message(id: $id) {
      id
      channel
      message
      from {
        id
        email
      }
      to {
        id
      }
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
      to {
        id
        email
      }
      channel
      message
    }
  }
`;
