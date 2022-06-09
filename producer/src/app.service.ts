import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker/locale/en_US';

@Injectable()
export class AppService {
  // eslint-disable-next-line @typescript-eslint/ban-types
  genarateUser(): Object {
    return {
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      age: faker.datatype.number(),
    };
  }
}
