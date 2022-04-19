import { Resolvers } from 'resolvers-types.generated';
import Query from './Query';
import { TwitterResolverContext } from './context.type';

const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
};

export default resolvers;

export { TwitterResolverContext };
