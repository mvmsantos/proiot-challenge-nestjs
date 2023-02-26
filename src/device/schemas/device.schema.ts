import * as mongoose from 'mongoose';

export const DeviceSchema = new mongoose.Schema(
  {
    name: String,
    temperature: String,
    moisture: String,
    luminosity: String,
  },
  { timestamps: true },
);
