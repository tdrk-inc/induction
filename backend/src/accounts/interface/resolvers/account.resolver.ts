import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AccountService } from "src/accounts/service/account.service";
import { SignupAccountInput } from "../requests/signup-account.input";
import { SigninAccountInput } from "../requests/signin-account.input";
import { UseGuards } from "@nestjs/common";
import {
  AccountGuard,
  AccountGuardContext,
} from "src/accounts/middleware/account.guard";
import { GraphQLAccount } from "../responses/account.graphql";

@Resolver()
export class AccountResolver {
  constructor(private readonly service: AccountService) {}

  @Mutation(() => String)
  async signup(
    @Args({ name: "input", type: () => SignupAccountInput })
    input: SignupAccountInput
  ): Promise<string> {
    const account = await this.service.signup(input);
    return account.name;
  }

  @Query(() => String)
  async signin(
    @Args({ name: "input", type: () => SigninAccountInput })
    input: SigninAccountInput
  ): Promise<string> {
    return this.service.signin(input);
  }

  @UseGuards(AccountGuard)
  @Query(() => GraphQLAccount, { name: "account" })
  async findOne(
    @Context() context: AccountGuardContext
  ): Promise<GraphQLAccount> {
    return new GraphQLAccount(await this.service.findOne(context.accountId));
  }
}
