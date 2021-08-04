import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity('test')
export class TestEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  company_name!: string;

  @Column({ nullable: false })
  first_name!: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ nullable: false })
  secret: string;

  @Column({ nullable: false })
  usr_id: string;

  //@BeforeInsert() // db insert 전에 수행됨
  //async hashSecret(){}
}