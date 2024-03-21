import { Resolver } from "@nestjs/graphql";
import { AccountService } from "src/accounts/service/account.service";

@Resolver()
export class AccountResolver {
  constructor(private readonly service: AccountService) {}
}
