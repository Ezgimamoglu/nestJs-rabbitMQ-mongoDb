import { OnApplicationShutdown } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/app.schema';

@Injectable()
export class AppService implements OnApplicationShutdown {
  private savedCount = 0;
  private totalTime = 0.0;

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUser: User): Promise<User> {
    const createdUser = new this.userModel(createUser);

    const startTime = process.hrtime();
    const result = await createdUser.save();
    const endTime = process.hrtime(startTime);

    const lastTime = endTime[0] * 1e9 + endTime[1] / 1e9;

    console.log('Time spent => ' + lastTime + 's');
    this.savedCount++;
    this.totalTime += lastTime;

    return result;
  }

  onApplicationShutdown(signal: string) {
    if (signal == 'SIGINT') {
      console.log(' ');
      console.log(signal);
      console.log('created count => ' + this.savedCount);
      console.log('total time => ' + this.totalTime + 's');
      console.log(
        'Benchmark Result=> ' + this.totalTime / this.savedCount + 's',
      );
    }
  }
}
