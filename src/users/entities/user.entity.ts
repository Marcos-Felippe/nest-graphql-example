import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'id field' })
  id: number;

  @Field(() => String, { description: 'name field' })
  name: string;

  @Field(() => String, { description: 'email field' })
  email: string;
}
