import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Para manejar peticiones HTTP
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';

@Module({
  imports: [HttpModule],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
