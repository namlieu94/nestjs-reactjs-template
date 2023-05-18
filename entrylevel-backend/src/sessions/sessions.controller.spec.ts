import { Test, TestingModule } from '@nestjs/testing';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { SessionsRepository } from './sessions.repository';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

describe('SessionsController', () => {
  let controller: SessionsController;
  let service: SessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [SessionsController],
      providers: [SessionsService, SessionsRepository, ConfigService],
    }).compile();

    service = module.get<SessionsService>(SessionsService);
    controller = module.get<SessionsController>(SessionsController);
  });

  describe('getSessions', () => {
    it('should return an array of sessions', async () => {
      const result = mockData[0];
      jest
        .spyOn(service, 'getSessions')
        .mockImplementation(() => result as any);
      const filterDto: any = {
        status: 'OFFERING',
      };
      expect(await controller.getSessions(filterDto)).toBe(result);
    });
  });
});

export const mockData = [
  {
    id: '8dc81564-8864-47b5-9c4e-a48e01f705ff',
    name: 'growth_jun_23',
    status: 'OFFERING',
    start_date: '2023-06-14T00:00:00+00:00',
    end_date: '2023-08-12T00:00:00+00:00',
    created_at: '2023-05-16T22:53:23.276719+00:00',
    program: [
      {
        id: '366d165a-dea1-4665-bcb4-bb3bb57dc630',
        display_title: 'Digital/Growth Marketing Level 1',
        thumbnail_img_url:
          'https://content.cloudfront.entrylevel.net/experience/growth-marketing-1-new/Thumbnails/growth-marketing-thumbnail.jpg',
        short_title: 'growth',
      },
    ],
  },
  {
    id: 'ab495c97-b90a-4192-9d06-b5a363241413',
    name: 'data_jun_23',
    status: 'OFFERING',
    start_date: '2023-06-14T00:00:00+00:00',
    end_date: '2023-08-12T00:00:00+00:00',
    created_at: '2023-05-16T22:53:23.532495+00:00',
    program: [
      {
        id: 'fb896bf3-5714-4f3d-9fec-9158f4243f0e',
        display_title: 'Data Analyst Level 1',
        thumbnail_img_url:
          'https://content.cloudfront.entrylevel.net/experience/data-analyst/data-analyst-thumbnail.jpg',
        short_title: 'data',
      },
    ],
  },
  {
    id: '6618dbfe-fcbd-4880-aac2-80eb72946b8c',
    name: 'data2_jan_22',
    status: 'FINISHED',
    start_date: '2022-01-12T00:00:00+00:00',
    end_date: '2022-02-23T00:00:00+00:00',
    created_at: '2021-12-15T23:37:37.6776+00:00',
    program: [
      {
        id: '0a41c29a-2ab2-4441-b5ce-0b7e1af4ce0d',
        display_title: 'Data Analyst 2: SQL',
        thumbnail_img_url:
          'https://content.cloudfront.entrylevel.net/experience/data2/data_2_thumbnail.jpeg',
        short_title: 'data2',
      },
    ],
  },
  {
    id: '147b0439-1e4c-4e28-a9b6-109e42a7301d',
    name: 'vc_jun_22',
    status: 'FINISHED',
    start_date: '2022-06-15T00:00:00+00:00',
    end_date: '2022-07-27T00:00:00+00:00',
    created_at: '2022-05-19T07:01:32.669298+00:00',
    program: [
      {
        id: 'ae5705e6-549f-42b2-9129-1fa8b6c35809',
        display_title: 'Venture Capital Analyst',
        thumbnail_img_url:
          'https://content.cloudfront.entrylevel.net/experience/vc-analyst/vc-analyst-thumbnail.jpeg',
        short_title: 'vc',
      },
    ],
  },
];
