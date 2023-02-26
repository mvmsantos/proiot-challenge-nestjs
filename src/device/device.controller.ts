import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Controller({
  version: '1',
  path: 'devices',
})
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post()
  async create(@Body() createDeviceDto: CreateDeviceDto) {
    return await this.deviceService.create(createDeviceDto);
  }

  @Get()
  async findAll() {
    return await this.deviceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.deviceService.findOne(id);
  }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateDeviceDto: UpdateDeviceDto,
  // ) {
  //   return await this.deviceService.update(id, updateDeviceDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return await this.deviceService.remove(id);
  // }
}
