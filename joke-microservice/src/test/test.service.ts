// Receives requests from controller and handles them
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  async handleTestEventRequest(data: Record<string, unknown>): Promise<string> {
    console.log(
      `TestService: handleTesetEventRequest received ${JSON.stringify(
        data.text,
      )}`,
    );
    return `handleTestEventRequest: event received with payload ${data.text}`;
  }
}
