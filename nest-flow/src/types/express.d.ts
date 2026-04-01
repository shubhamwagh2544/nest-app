import { Request } from 'express';

declare module 'express' {
  export interface Request {
    // add id to express request in declaration file (.d.ts)
    id?: string;
  }
}
