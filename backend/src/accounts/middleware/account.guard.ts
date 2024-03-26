import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { verify } from "jsonwebtoken";
import { Observable } from "rxjs";
import { Account } from "../domain/entities/account.entity";
import { GraphQLError } from "graphql";

export type AccountGuardContext = {
  accountId: Account["id"];
};

@Injectable()
export class AccountGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const graphqlContext = GqlExecutionContext.create(context).getContext();
    const req = graphqlContext.req;
    const token: string = req.headers?.authorization;
    const payload = verify(token.split(" ")[1], "your-secret-key");
    if (typeof payload === "string") throw new GraphQLError("Approval dailed.");
    graphqlContext.accountId = payload.id;
    return true;
  }
}
