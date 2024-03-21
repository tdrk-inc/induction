const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class AddForeignKeyToPostsTable1711042874523 {
    name = 'AddForeignKeyToPostsTable1711042874523'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_e3bab03a7dee745151598930014" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_e3bab03a7dee745151598930014"`);
    }
}
