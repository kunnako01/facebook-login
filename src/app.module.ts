import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacebookStrategy } from './facebook.strategy';
import { PageService } from './page.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy, PageService],
})
export class AppModule {}
