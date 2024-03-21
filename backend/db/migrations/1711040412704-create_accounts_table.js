const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateAccountsTable1711040412704 {
    name = 'CreateAccountsTable1711040412704'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "accounts" ("id" character varying(254) NOT NULL, "name" character varying(254) NOT NULL, "password" text NOT NULL, "created_at" TIMESTAMP(0) WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id")); COMMENT ON COLUMN "accounts"."id" IS 'ID'; COMMENT ON COLUMN "accounts"."name" IS 'アカウント名'; COMMENT ON COLUMN "accounts"."password" IS 'パスワード'; COMMENT ON COLUMN "accounts"."created_at" IS '作成日'; COMMENT ON COLUMN "accounts"."updated_at" IS '更新日'`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "accounts"`);
    }
}
