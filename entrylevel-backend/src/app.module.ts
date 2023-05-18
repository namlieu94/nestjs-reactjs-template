import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SessionsModule } from './sessions/sessions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.STAGE}`],
    }),
    SessionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
