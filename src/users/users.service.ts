import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    const user = {
      id: 1,
      name: createUserInput.name,
      email: createUserInput.email,
    };

    return user;
  }

  findAll() {
    const users = [
      {
        id: 1,
        name: 'Marcos',
        email: 'M@email',
      },
      {
        id: 2,
        name: 'Felippe',
        email: 'F@email',
      },
      {
        id: 3,
        name: 'Duda',
        email: 'D@email',
      },
    ];

    return users;
  }

  findOne(id: number) {
    const users = [
      {
        id: 1,
        name: 'Marcos',
        email: 'M@email',
      },
      {
        id: 2,
        name: 'Felippe',
        email: 'F@email',
      },
      {
        id: 3,
        name: 'Duda',
        email: 'D@email',
      },
    ];

    return users[id - 1];
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
