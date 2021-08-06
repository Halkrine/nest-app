import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity()
export class TestEntity {
  @PrimaryGeneratedColumn() // 이 Annotation을 통해 기본키로 사용함을 명시함
  id: string;

  @Column()
  company_name: string;

  @Column({ nullable: false })
  first_name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ nullable: false })
  secret: string;

  @Column({ nullable: false })
  usr_id: string;
}
