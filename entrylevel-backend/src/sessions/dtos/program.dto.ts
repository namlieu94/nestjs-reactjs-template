import { IsString } from 'class-validator';

export class ProgramDTO {
  @IsString()
  id: string;

  @IsString()
  display_title: string;

  @IsString()
  thumbnail_img_url: string;

  @IsString()
  short_title: string;
}
