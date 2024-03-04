// The .module is the one that imports the other files
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GatewayModule } from './gateway/gateway.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [AuthModule, UserModule, GatewayModule,PrismaModule, 
     ConfigModule.forRoot({
        isGlobal: true,
     })],
})
export class AppModule {}
