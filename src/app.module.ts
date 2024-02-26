// The .module is the one that imports the other files
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { GatewayModule } from './gateway/gateway.module';


@Module({
  imports: [AuthModule, UserModule, BookmarkModule, GatewayModule],
})
export class AppModule {}
