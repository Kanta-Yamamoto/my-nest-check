import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  detail?: string;

  @Field(() => Date, { nullable: true })
  deadline?: Date;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  status?: number;
}

@InputType()
export class UpdateTodoInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  detail?: string;

  @Field(() => Date, { nullable: true })
  deadline?: Date;

  @Field(() => Int, { nullable: true })
  status?: number;
}
