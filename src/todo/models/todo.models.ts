import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => ID)
  readonly todo_id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  detail?: string;

  @Field(() => Date)
  deadline: Date;

  @Field(() => Int)
  status: number;

  @Field(() => Date)
  readonly created_at: Date;

  @Field(() => Date)
  readonly updated_at: Date;
}
