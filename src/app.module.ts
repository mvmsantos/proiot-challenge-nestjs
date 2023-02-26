import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GatewayModule } from './gateway/gateway.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [GatewayModule, DeviceModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
