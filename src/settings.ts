import { App } from './app';

export interface Settings {
  // allowedHosts: string[];
  // database: Database;
  // debug: boolean;
  apps?: App[];
  // middleware: string[];
}

export interface Database {
  engine: string;
  name: string;
  user: string;
  password: string;
  host: string;
  port: string;
}
