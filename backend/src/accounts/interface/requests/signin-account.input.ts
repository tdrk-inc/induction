import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SigninAccountInput {
  @Field()
  id: string;

  @Field()
  password: string;
}
