import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "../domain/entities/post.entity";
import { IsNull, Repository } from "typeorm";
import { Account } from "src/accounts/domain/entities/account.entity";
import { CreatePostInput } from "../interface/requests/create-post.input";
import { UpdatePostInput } from "../interface/requests/update-post.input";
import { GraphQLError } from "graphql";

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

  async update(
    accountId: Account["id"],
    input: UpdatePostInput
  ): Promise<Post> {
    const post = this.repository.findOneBy({ id: input.id, accountId });
    if (!post) throw new GraphQLError("Post not found.");
    return this.repository.save(input);
  }

  async remove(accountId: Account["id"], id: Post["id"]): Promise<Post> {
    const post = await this.repository.findOneBy({ id, accountId });
    if (!post) throw new GraphQLError("Post not found.");
    const removedPost: Post = JSON.parse(JSON.stringify(post));
    this.repository.remove(post);
    return removedPost;
  }

  async find(accountId: Account["id"]): Promise<Post[]> {
    return this.repository.findBy({ accountId, basePostId: IsNull() });
  }
}
