import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  render(): Record<string, string> {
    const message = this.appService.getHello();
    return { message };
  }
}
