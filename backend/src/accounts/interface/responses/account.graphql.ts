import { Field, GraphQLTimestamp, ObjectType } from "@nestjs/graphql";
import { Account } from "src/accounts/domain/entities/account.entity";

@ObjectType("Account")
export class GraphQLAccount {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => GraphQLTimestamp)
  createdAt: Date;

  @Field(() => GraphQLTimestamp)
  updatedAt: Date;

  constructor(entity: Account) {
    this.id = entity.id;
    this.name = entity.name;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
