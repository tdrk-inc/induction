import { Field, InputType, Int } from "@nestjs/graphql";
import { Post } from "src/posts/domain/entities/post.entity";

@InputType()
export class UpdatePostInput {
  @Field(() => Int)
  id: Post["id"];

  @Field()
  content: string;
}
