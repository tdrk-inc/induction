import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AccountService } from "src/accounts/service/account.service";
import { CreateAccountInput } from "../requests/create-account.input";

@Resolver()
export class AccountResolver {
  constructor(private readonly service: AccountService) {}

  @Mutation(() => String)
  async signup(
    @Args({ name: "input", type: () => CreateAccountInput })
    input: CreateAccountInput
  ): Promise<string> {
    const account = await this.service.signup(input);
    return account.name;
  }
}
