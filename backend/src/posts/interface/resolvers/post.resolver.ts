import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import {
  AccountGuard,
  AccountGuardContext,
} from "src/accounts/middleware/account.guard";
import { PostService } from "src/posts/service/post.service";
import { CreatePostInput } from "../requests/create-post.input";
import { UseGuards } from "@nestjs/common";
import { GraphQLPost } from "../responses/post.graphql";

@UseGuards(AccountGuard)
@Resolver()
export class PostResolver {
  constructor(private readonly service: PostService) {}

  @Mutation(() => GraphQLPost)
  async createPost(
    @Context() context: AccountGuardContext,
    @Args({ name: "input", type: () => CreatePostInput }) input: CreatePostInput
  ): Promise<GraphQLPost> {
    return this.service.create(context.accountId, input);
  }
}
