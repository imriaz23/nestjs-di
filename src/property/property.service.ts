import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { UserService } from "../user/user.service";

@Injectable()
export class PropertyService {
  constructor(private readonly userService: UserService) {
  }
  create(createPropertyDto: CreatePropertyDto) {
    return 'This action adds a new property';
  }

  findAll() {
    return this.userService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
