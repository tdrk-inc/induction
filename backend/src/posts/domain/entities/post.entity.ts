import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn("increment", { comment: "ID" })
  id: number;

  @Column({ type: "text", comment: "コンテンツ" })
  content: string;

  @Column({
    type: "int",
    name: "base_post_id",
    nullable: true,
    comment: "返信元投稿",
  })
  basePostId?: number;

  @CreateDateColumn({
    name: "created_at",
    type: "timestamptz",
    precision: 0,
    comment: "作成日",
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamptz",
    precision: 0,
    comment: "更新日",
  })
  updatedAt: Date;

  @Column({ type: "varchar", name: "account_id", comment: "アカウントID" })
  accountId: string;
}
