import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'name field' })
  name: string;

  @Field(() => String, { description: 'email field' })
  email: string;
}
