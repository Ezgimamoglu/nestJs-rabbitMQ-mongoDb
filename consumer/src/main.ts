import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@rabbitmq:5672'],
      queue: 'playable-queue',
      // false = manual acknowledgement; true = automatic acknowledgment
      noAck: false,
      // Get one by one
      prefetchCount: 1,
    },
  });

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  await app.listenAsync();
}
bootstrap();
