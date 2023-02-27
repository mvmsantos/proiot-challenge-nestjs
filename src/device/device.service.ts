import { HttpService } from '@nestjs/axios/dist';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './interfaces/device.interface';

@Injectable()
export class DeviceService {
  constructor(
    @Inject('DEVICE_MODEL')
    private deviceModel: Model<Device>,
    private readonly httpService: HttpService,
  ) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const createdDev = new this.deviceModel(createDeviceDto);
    const deviceCreated: Promise<Device> = createdDev.save();

    return deviceCreated;
  }

  async findAll(): Promise<Device[]> {
    return this.deviceModel.find().exec();
  }

  async findOne(id: string) {
    return this.deviceModel.findById(id).exec();
  }

  async update(id: string, UpdateDeviceDto: UpdateDeviceDto) {
    await this.deviceModel.updateOne({ _id: id }, UpdateDeviceDto).exec();
    return this.findOne(id);
  }

  async delete(id: string) {
    return await this.deviceModel.deleteOne({ _id: id }).exec();
  }
}
