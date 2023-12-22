import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TestMessage } from './test.message';

@Injectable()
export class TestService {
  constructor(
    @Inject('JOKE_SERVICE') private readonly jokeClient: ClientProxy,
  ) {}
  async handleEventTest(): Promise<string> {
    this.jokeClient.emit<any>('test_event', new TestMessage('Event Test'));
    return `joke microservice api: test_event emitted`;
  }
}
