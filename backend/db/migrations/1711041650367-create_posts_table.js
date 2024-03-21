const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreatePostsTable1711041650367 {
    name = 'CreatePostsTable1711041650367'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "content" text NOT NULL, "base_post_id" integer, "created_at" TIMESTAMP(0) WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) WITH TIME ZONE NOT NULL DEFAULT now(), "account_id" character varying NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id")); COMMENT ON COLUMN "posts"."id" IS 'ID'; COMMENT ON COLUMN "posts"."content" IS 'コンテンツ'; COMMENT ON COLUMN "posts"."base_post_id" IS '返信元投稿'; COMMENT ON COLUMN "posts"."created_at" IS '作成日'; COMMENT ON COLUMN "posts"."updated_at" IS '更新日'; COMMENT ON COLUMN "posts"."account_id" IS 'アカウントID'`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "posts"`);
    }
}
