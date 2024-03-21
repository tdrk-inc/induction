import { Module } from "@nestjs/common";
import { AccountService } from "./service/account.service";
import { AccountResolver } from "./interface/resolvers/account.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "./domain/entities/account.entity";

@Module({
  providers: [AccountService, AccountResolver],
  imports: [TypeOrmModule.forFeature([Account])],
})
export class AccountModule {}
