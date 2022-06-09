import { User } from './schema/app.schema';
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('save-user')
  public async execute(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMesssage();

    console.log('data', data);
    const createdUser = new User();
    createdUser.name = data.name;
    createdUser.surname = data.surname;
    createdUser.age = data.age;

    await this.appService.createUser(createdUser);
    channel.ack(orginalMessage);
  }
}
