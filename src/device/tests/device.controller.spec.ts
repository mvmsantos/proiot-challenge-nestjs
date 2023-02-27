import { Test, TestingModule } from '@nestjs/testing';
import { DeviceController } from '../device.controller';
import { DeviceService } from '../device.service';

const DeviceList = [
  new DeviceService({ moisture: '10%', temperature: '30°C', name: 'test' }),
];

describe('DeviceController', () => {
  let DevicesController: DeviceController;
  let DevicesService: DeviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceController],
      providers: [
        {
          provide: DeviceService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(DeviceList),
            create: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    DevicesController = module.get<DeviceController>(DeviceController);
    DevicesService = module.get(DeviceService);
  });

  it('should be defined', () => {
    expect(DevicesController).toBeDefined();
    expect(DevicesService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a devices list sucessfully', async () => {
      // Act
      const result = await DevicesController.findAll();

      // Assert
      expect(result).toEqual([DevicesService]);
    });
  });
});
