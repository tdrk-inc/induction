import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreatePostInput {
  @Field()
  content: string;

  @Field(() => Int)
  basePostId?: number;
}
