// Receives requests from the client and sends them to service
import { Controller } from '@nestjs/common';
import { TestService } from './test.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @EventPattern('test_event')
  async testEventRequest(data: Record<string, unknown>) {
    let status = await this.testService.handleTestEventRequest(data);
    console.log(`TestController: event served with status ${status}`);
  }
}
