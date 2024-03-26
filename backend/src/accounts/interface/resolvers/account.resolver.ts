import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AccountService } from "src/accounts/service/account.service";
import { SignupAccountInput } from "../requests/signup-account.input";
import { SigninAccountInput } from "../requests/signin-account.input";

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
}
