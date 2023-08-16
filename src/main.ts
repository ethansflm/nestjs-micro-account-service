import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const APP_ENV = 9010;

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        // host: '127.0.0.1',
        host: '0.0.0.0',
        port: APP_ENV,
        // tlsOptions: {
        //   host: '0850-103-43-162-133.ngrok.io',
        // },
      },
    },
  );
  // app.listen(() => console.log('Microservice is listening')); 此处代码会报错
  app.listen();
}
bootstrap();
