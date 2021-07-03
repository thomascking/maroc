export interface Settings {
  allowedHosts: string[];
  database: Database;
  debug: boolean;
  apps: string[];
  middleware: string[];
}

export interface Database {
  engine: string;
  name: string;
  user: string;
  password: string;
  host: string;
  port: string;
}
