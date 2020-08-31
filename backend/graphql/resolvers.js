import User from '../models/User';

const resolvers = {
    Query: {
        users: async () => await User.find(),
        user: async (_, { email }) => User.findOne({ email: email })
    },
    Mutation: {
    }
};

export default resolvers; 