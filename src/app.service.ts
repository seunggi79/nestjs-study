import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello() {
    // process.env.DB_PASSWORD 와 같다다
    return this.configService.get('DB_PASSWORD')
    
  }
}
