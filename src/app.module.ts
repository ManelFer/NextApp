import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
