import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './rabbit-mq.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}
  @Get()
  async getGenerateRandomUser() {
    const dataUser = this.appService.genarateUser();
    this.rabbitMQService.send('save-user', dataUser);
    return dataUser;
  }
}
