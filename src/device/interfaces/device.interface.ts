import { Document } from 'mongoose';

export interface Device extends Document {
  readonly name: string;
  readonly temperature: string;
  readonly moisture: string;
  readonly luminosity: string;
}