import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SignupAccountInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  password: string;
}
