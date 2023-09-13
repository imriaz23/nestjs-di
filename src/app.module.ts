import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { PropertyModule } from './property/property.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BookingModule, PropertyModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
