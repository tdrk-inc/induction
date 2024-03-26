import { Module } from "@nestjs/common";
import { AccountService } from "./service/account.service";
import { AccountResolver } from "./interface/resolvers/account.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "./domain/entities/account.entity";
import { ConfigModule } from "@nestjs/config";
import { AccountGuard } from "./middleware/account.guard";

@Module({
  providers: [AccountService, AccountResolver, AccountGuard],
  imports: [TypeOrmModule.forFeature([Account]), ConfigModule],
})
export class AccountModule {}
