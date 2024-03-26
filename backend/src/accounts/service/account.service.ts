import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "../domain/entities/account.entity";
import { Repository } from "typeorm";
import { SignupAccountInput } from "../interface/requests/signup-account.input";
import { createHash } from "crypto";
import { SigninAccountInput } from "../interface/requests/signin-account.input";
import { GraphQLError } from "graphql";
import { sign } from "jsonwebtoken";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly repository: Repository<Account>,
    private readonly configService: ConfigService
  ) {}

  async signup({ password, ...input }: SignupAccountInput): Promise<Account> {
    const hash = createHash("sha256").update(password);
    return this.repository.save({ password: hash.digest("hex"), ...input });
  }

  async signin({ id, password }: SigninAccountInput): Promise<string> {
    const account = await this.repository.findOneBy({ id });
    const hash = createHash("sha256").update(password);
    if (account.password !== hash.digest("hex")) {
      throw new GraphQLError("Signin faild.");
    }
    return sign({ id }, this.configService.get("JWT_SECREAT_KEY"));
  }
}
