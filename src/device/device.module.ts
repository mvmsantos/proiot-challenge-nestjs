import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import mongoose, { Connection } from 'mongoose';
import { DeviceSchema } from './schemas/device.schema';
import { HttpModule } from '@nestjs/axios/dist';

mongoose.set('strictQuery', false);

@Module({
  imports: [HttpModule],
  controllers: [DeviceController],
  providers: [
    DeviceService,
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect(
          'mongodb+srv://mvmsantos:mvmsantosdatabase@cluster0.ce8oquk.mongodb.net/?retryWrites=true&w=majority',
        ),
    },
    {
      provide: 'DEVICE_MODEL',
      useFactory: (connection: Connection) =>
        connection.model('Device', DeviceSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ],
})
export class DeviceModule {}
