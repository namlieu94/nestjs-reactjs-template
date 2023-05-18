import { IsString, IsEnum, IsOptional } from 'class-validator';
import { SessionStatus } from '../../common';
import { Transform } from 'class-transformer';

export class GetSessionsDTO {
  @IsOptional()
  @IsString()
  short_title?: string;

  @IsOptional()
  @Transform(({ value }) => value.toUpperCase())
  @IsEnum(SessionStatus)
  status?: SessionStatus;
}
