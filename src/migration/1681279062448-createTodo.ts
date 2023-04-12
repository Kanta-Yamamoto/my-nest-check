import {MigrationInterface, QueryRunner} from "typeorm";

export class createTodoAndProfile1681279062448 implements MigrationInterface {
    name = 'createTodoAndProfile1681279062448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `todo` (`todo_id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `detail` text NULL, `deadline` timestamp NULL, `status` int NOT NULL DEFAULT '0', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`todo_id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `todo`");
    }

}
