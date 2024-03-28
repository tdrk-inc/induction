import { Field, GraphQLTimestamp, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLAccount } from "src/accounts/interface/responses/account.graphql";
import { Post } from "src/posts/domain/entities/post.entity";

@ObjectType("Post")
export class GraphQLPost {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field(() => Int, { nullable: true })
  basePostId?: number;

  @Field(() => GraphQLTimestamp)
  createdAt: Date;

  @Field(() => GraphQLTimestamp)
  updatedAt: Date;

  @Field()
  readonly accountId: string;

  @Field(() => GraphQLAccount)
  readonly account?: GraphQLAccount;

  @Field(() => [GraphQLPost], { nullable: true })
  readonly relatedPosts?: GraphQLPost[];

  constructor(entity: Post, relatedPosts?: GraphQLPost[]) {
    this.id = entity.id;
    this.content = entity.content;
    this.basePostId = entity.basePostId;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.accountId = entity.accountId;
    this.account = entity.account && new GraphQLAccount(entity.account);
    this.relatedPosts = relatedPosts;
  }
}
