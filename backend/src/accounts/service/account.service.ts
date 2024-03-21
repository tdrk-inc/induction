import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "../domain/entities/account.entity";
import { Repository } from "typeorm";
import { CreateAccountInput } from "../interface/requests/create-account.input";
import { createHash } from "crypto";

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly repository: Repository<Account>
  ) {}

  async signup({ password, ...input }: CreateAccountInput): Promise<Account> {
    const hash = createHash("sha256").update(password);
    return this.repository.save({ password: hash.digest("hex"), ...input });
  }
}
