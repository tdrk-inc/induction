import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("accounts")
export class Account {
  @PrimaryColumn({ type: "varchar", length: 254, comment: "ID" })
  id: string;

  @Column({ type: "varchar", length: 254, comment: "アカウント名" })
  name: string;

  @Column({ type: "text", comment: "パスワード" })
  password: string;

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
}
