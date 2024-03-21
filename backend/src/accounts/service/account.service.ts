import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "../domain/entities/account.entity";
import { Repository } from "typeorm";

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly repository: Repository<Account>
  ) {}
}
