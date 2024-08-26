import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from 'src/util/prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({ data: createUserInput });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(uid: string) {
    return `This action returns a #${uid} user`;
  }

  update(uid: string) {
    return `This action updates a #${uid} user`;
  }

  remove(uid: string) {
    return `This action removes a #${uid} user`;
  }
}
