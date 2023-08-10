import { Module } from '@nestjs/common';
import { ApiModule } from './Api/Api.module';

@Module({
  imports: [ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
