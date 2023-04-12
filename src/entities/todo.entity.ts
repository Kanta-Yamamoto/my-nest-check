import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // <-- 追加
@Entity()
export class Todo {
  @Field(() => Int) // <-- 追加
  @PrimaryGeneratedColumn()
  readonly todo_id: number;

  @Field() // <-- 追加
  @Column('varchar', { length: 255, nullable: false })
  title: string;

  @Field({ nullable: true }) // <-- 追加
  @Column('text', { nullable: true })
  detail?: string;

  @Field(() => Date, { nullable: true }) // <-- 追加
  @Column('timestamp', { nullable: true })
  deadline?: Date;

  @Field(() => Int) // <-- 追加
  @Column('integer', { nullable: false, default: 0 })
  status: number;

  @Field(() => Date) // <-- 追加
  @CreateDateColumn()
  readonly created_at?: Date;

  @Field(() => Date) // <-- 追加
  @UpdateDateColumn()
  readonly updated_at?: Date;
}
