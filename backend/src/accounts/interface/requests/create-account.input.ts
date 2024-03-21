import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateAccountInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  password: string;
}
