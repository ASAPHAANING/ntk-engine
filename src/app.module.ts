import { Module } from '@nestjs/common';
import { NetworkModule } from './network/network.module';

@Module({
	imports: [ NetworkModule ]
})
export class AppModule {}
