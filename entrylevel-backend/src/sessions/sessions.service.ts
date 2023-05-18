import { Injectable } from '@nestjs/common';
import { SessionsRepository } from './sessions.repository';
import { SessionEntity } from './session.entity';
import { GetSessionsDTO } from './dtos';
import { httpStatusCodes, ErrorHandler } from '../common';

@Injectable()
export class SessionsService {
  constructor(private sessionsRepository: SessionsRepository) {}

  async getSessions(filterDto: GetSessionsDTO): Promise<SessionEntity[]> {
    const sessions = await this.sessionsRepository.getSessions();
    if (!sessions && !Array.isArray(sessions))
      throw new ErrorHandler(
        httpStatusCodes.NOT_FOUND,
        'Sessions data is invalid!',
        sessions,
        true,
      );
    let result = sessions;
    const { short_title, status } = filterDto;

    if (status) {
      result = result.filter((value) => value && value.status === status);
    }

    if (short_title) {
      result = result.filter((value) => checkShortTitle(value, short_title));
    }
    return result;
  }
}

const checkShortTitle = (value: SessionEntity, shortTitle: string): boolean => {
  return (
    value &&
    Array.isArray(value.program) &&
    value.program.some((e) => e && e.short_title === shortTitle)
  );
};
