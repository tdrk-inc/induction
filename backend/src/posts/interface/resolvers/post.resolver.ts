import { Args, Context, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import {
  AccountGuard,
  AccountGuardContext,
} from "src/accounts/middleware/account.guard";
import { PostService } from "src/posts/service/post.service";
import { CreatePostInput } from "../requests/create-post.input";
import { UseGuards } from "@nestjs/common";
import { GraphQLPost } from "../responses/post.graphql";
import { UpdatePostInput } from "../requests/update-post.input";

@UseGuards(AccountGuard)
@Resolver()
export class PostResolver {
  constructor(private readonly service: PostService) {}

  @Mutation(() => GraphQLPost)
  async createPost(
    @Context() context: AccountGuardContext,
    @Args({ name: "input", type: () => CreatePostInput }) input: CreatePostInput
  ): Promise<GraphQLPost> {
    return new GraphQLPost(await this.service.create(context.accountId, input));
  }

  @Mutation(() => GraphQLPost)
  async updatePost(
    @Context() context: AccountGuardContext,
    @Args({ name: "input", type: () => UpdatePostInput }) input: UpdatePostInput
  ): Promise<GraphQLPost> {
    return new GraphQLPost(await this.service.update(context.accountId, input));
  }

  @Mutation(() => GraphQLPost)
  async removePost(
    @Context() context: AccountGuardContext,
    @Args({ name: "id", type: () => Int }) id: number
  ): Promise<GraphQLPost> {
    return new GraphQLPost(await this.service.remove(context.accountId, id));
  }

  @Query(() => [GraphQLPost], { name: "posts" })
  async find(): Promise<GraphQLPost[]> {
    const posts = await this.service.find();
    return posts.map((v) => new GraphQLPost(v));
  }

  @Query(() => GraphQLPost, { name: "post" })
  async findOne(
    @Args({ name: "id", type: () => Int }) id: number
  ): Promise<GraphQLPost> {
    const [post, relatedPosts] = await this.service.findOne(id);
    return new GraphQLPost(post, relatedPosts);
  }
}
