import {MigrationInterface, QueryRunner} from "typeorm";

export class createTodo1681183771802 implements MigrationInterface {
    name = 'createTodo1681183771802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `todo` (`todo_id` int NOT NULL AUTO_INCREMENT, `title` varchar(20) NOT NULL, `due_date` date NOT NULL, `status` tinyint(1) NOT NULL DEFAULT '1', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`todo_id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `todo`");
    }

}
