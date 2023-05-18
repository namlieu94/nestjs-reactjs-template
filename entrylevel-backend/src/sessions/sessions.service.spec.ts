import { Test, TestingModule } from '@nestjs/testing';
import { SessionsService } from './sessions.service';
import { SessionsRepository } from './sessions.repository';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { mockData } from './sessions.controller.spec';

describe('SessionsService', () => {
  let service: SessionsService;
  let repository: SessionsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [SessionsService, SessionsRepository, ConfigService],
    }).compile();

    repository = module.get<SessionsRepository>(SessionsRepository);
    service = module.get<SessionsService>(SessionsService);
  });

  describe('getSessions', () => {
    it('should return an filtered array of sessions', async () => {
      const result = mockData.slice(0, 2);
      jest
        .spyOn(repository, 'getSessions')
        .mockImplementation(() => mockData as any);
      const filterDto: any = {
        status: 'OFFERING',
      };
      expect(await service.getSessions(filterDto)).toStrictEqual(result);
    });

    it('should return an empty array of sessions', async () => {
      const result = [];
      jest
        .spyOn(repository, 'getSessions')
        .mockImplementation(() => mockData as any);
      const filterDto: any = {
        status: 'RUNNING',
      };
      expect(await service.getSessions(filterDto)).toStrictEqual(result);
    });

    it('should return an array containing values that satisfy both status and short_title', async () => {
      const result = [mockData[1]];
      jest
        .spyOn(repository, 'getSessions')
        .mockImplementation(() => mockData as any);
      const filterDto: any = {
        status: 'OFFERING',
        short_title: 'data',
      };
      expect(await service.getSessions(filterDto)).toStrictEqual(result);
    });
  });
});
