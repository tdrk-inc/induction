import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "../domain/entities/post.entity";
import { Repository } from "typeorm";
import { Account } from "src/accounts/domain/entities/account.entity";
import { CreatePostInput } from "../interface/requests/create-post.input";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly repository: Repository<Post>
  ) {}

  async create(
    accountId: Account["id"],
    input: CreatePostInput
  ): Promise<Post> {
    return this.repository.save({ accountId, ...input });
  }
}
