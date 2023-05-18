import { Injectable } from '@nestjs/common';
import { SessionEntity } from './session.entity';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { firstValueFrom, catchError } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { httpStatusCodes, ErrorHandler } from '../common';
@Injectable()
export class SessionsRepository {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  data_url = this.configService.get<string>('SOURCE_URL');

  async getSessions(): Promise<SessionEntity[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<SessionEntity[]>(this.data_url).pipe(
        catchError((error: AxiosError) => {
          throw new ErrorHandler(
            httpStatusCodes.BAD_REQUEST,
            'Cannot get data!',
            error,
            true,
          );
        }),
      ),
    );
    return data;
  }
}
