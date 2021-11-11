const SnapQueries = `
    snap(id: ID!):Snap!
    snaps:[Snap!]!
`;
const SnapTypes = `
    type Snap {
        _id:ID
        text:String!
        createdAt:Date!
        user:User!
    }
`;
const SnapSubscriptions = `
    sayi:Int
`;
const SnapInputs = `
    input CreateSnapInput {
        text:String!
        user_id:ID!
    }
`;
const SnapMutations = `
    createSnap(data:CreateSnapInput!):Snap
`;
module.exports = {
  SnapQueries,
  SnapInputs,
  SnapTypes,
  SnapMutations,
  SnapSubscriptions,
};
