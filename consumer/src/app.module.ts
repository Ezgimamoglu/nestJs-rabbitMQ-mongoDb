import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/app.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb', {
      dbName: 'playable-factory-case-db',
      autoCreate: true,
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
