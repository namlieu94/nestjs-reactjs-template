// import { ValidateNested, IsString, IsEnum, IsDate } from 'class-validator';
// import { Type } from 'class-transformer';
import { SessionStatus } from '../common';
import { ProgramDTO } from './dtos';

export class SessionEntity {
  id: string;

  name: string;

  status: SessionStatus;

  start_date: Date;

  end_date: Date;

  created_at: Date;

  program: ProgramDTO[];
}
