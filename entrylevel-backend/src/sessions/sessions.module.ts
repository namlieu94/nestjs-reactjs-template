import { Module } from '@nestjs/common';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { HttpModule } from '@nestjs/axios';
import { SessionsRepository } from './sessions.repository';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [SessionsController],
  providers: [SessionsService, SessionsRepository, ConfigService],
})
export class SessionsModule {}
