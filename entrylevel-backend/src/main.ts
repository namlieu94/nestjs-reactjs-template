import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { TransformInterceptor, logger } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new TransformInterceptor());
  const port = process.env.PORT || 8080;
  await app.listen(port);
  logger.log('info', `Application is running on: http://localhost:${port}/`);
}
bootstrap();
