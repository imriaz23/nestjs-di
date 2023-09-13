import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { UserService } from "../user/user.service";

@Module({
  controllers: [PropertyController],
  providers: [PropertyService,UserService],
})
export class PropertyModule {}
