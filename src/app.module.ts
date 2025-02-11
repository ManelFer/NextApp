import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
