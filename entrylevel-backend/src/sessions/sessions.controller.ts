import { Controller, Get, Query } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionDTO, GetSessionsDTO } from './dtos';

@Controller('sessions')
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Get()
  getSessions(@Query() filterDto: GetSessionsDTO): Promise<SessionDTO[]> {
    return this.sessionsService.getSessions(filterDto);
  }
}
