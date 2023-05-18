import { ValidateNested, IsString, IsEnum, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { SessionStatus } from '../../common';
import { ProgramDTO } from './program.dto';

export class SessionDTO {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsEnum(SessionStatus)
  status: SessionStatus;

  @Type(() => Date)
  @IsDate()
  start_date: Date;

  @Type(() => Date)
  @IsDate()
  end_date: Date;

  @Type(() => Date)
  @IsDate()
  created_at: Date;

  @Type(() => ProgramDTO)
  @ValidateNested()
  program: ProgramDTO[];
}

// {
//   "id": "6618dbfe-fcbd-4880-aac2-80eb72946b8c",
//   "name": "data2_jan_22",
//   "status": "FINISHED",
//   "start_date": "2022-01-12T00:00:00+00:00",
//   "end_date": "2022-02-23T00:00:00+00:00",
//   "created_at": "2021-12-15T23:37:37.6776+00:00",
//   "program": [
//     {
//       "id": "0a41c29a-2ab2-4441-b5ce-0b7e1af4ce0d",
//       "display_title": "Data Analyst 2: SQL",
//       "thumbnail_img_url": "https://content.cloudfront.entrylevel.net/experience/data2/data_2_thumbnail.jpeg",
//       "short_title": "data2"
//     }
//   ]
// }
