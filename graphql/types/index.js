const { gql } = require('apollo-server-express');
const { UserQueries, UserInputs, UserTypes, UserMutations } = require('./User');
const {
  SnapSubscriptions,
  SnapQueries,
  SnapInputs,
  SnapTypes,
  SnapMutations,
} = require('./Snap');
const { TokenTypes } = require('./Token');

const types = gql`
  scalar Date
  type Query {

    ${UserQueries}
    
    ${SnapQueries}

  }
  type Mutation {
    
    ${UserMutations}

    ${SnapMutations}
  }
  
  type Subscription {

    ${SnapSubscriptions}
  
  }
  ${UserTypes}
  ${UserInputs}
  
  ${SnapTypes}
  ${SnapInputs}
  
  ${TokenTypes}


`;
module.exports = types;
