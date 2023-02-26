import { HttpService } from '@nestjs/axios/dist';
import { Inject, Injectable } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import { Model } from 'mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './interfaces/device.interface';
import { Server, Socket } from 'socket.io';

@Injectable()
export class DeviceService {
  constructor(
    @Inject('DEVICE_MODEL')
    private deviceModel: Model<Device>,
    private readonly httpService: HttpService,
  ) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const createdCat = new this.deviceModel(createDeviceDto);
    const deviceCreated: Promise<Device> = createdCat.save();

    return deviceCreated;
  }

  async findAll(): Promise<Device[]> {
    return this.deviceModel.find().exec();
  }

  async findOne(id: string) {
    return this.deviceModel.findById(id).exec();
  }

  // async update(id: string, updateDeviceDto: UpdateDeviceDto) {
  //   try {
  //     const updated = await Device.findByIdAndUpdate(id, device);

  //     if(!updated){
  //       return res.status(200).json({
  //         status: 200,
  //         message: `This Device id not found!`
  //       });
  //     }

  //     const result = await Device.findById(id);
  //     return res.json(result);
  // } catch (error) {
  //   console.log({
  //     status: 422,
  //     message: `Error: ${error}`
  //   })

  //   return res.status(422).json({
  //     status: 422,
  //     message: `Error: ${error}`
  //   });
  // }
  // }

  // async remove(id: string) {
  //   return `This action removes a #${id} device`;
  // }
}
