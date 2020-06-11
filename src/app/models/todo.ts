import { Time } from './time';

export interface Todo {
  id: number;
  title: string;
  description: string;
  time: Time;
}
