import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1603034577498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'users',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name:'name',
                    type:'varchar'
                },
                {
                    name:'email',
                    type:'vachar'
                },
                {
                    name:'password',
                    type:'vachar'
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
