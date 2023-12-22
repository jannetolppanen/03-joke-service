import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TestModule } from './test/test.module';
import clientConfig from './client_config';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'JOKE_SERVICE',
        transport: Transport.TCP,
        options: {
          host: clientConfig.microserviceOptions.host,
          port: clientConfig.microserviceOptions.port,
        },
      },
    ]),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [ClientsModule],
})
export class AppModule {}
