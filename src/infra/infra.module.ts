import { Module } from '@nestjs/common';
import { ControllerModule } from './http/http.module';

@Module({
  imports: [ControllerModule],
})
export class InfraModule {}
