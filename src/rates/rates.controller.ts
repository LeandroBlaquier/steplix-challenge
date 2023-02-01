import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { Rates } from './interfaces/rates.interface';
import { RatesService } from './rates.service';

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get()
  getAllRates(): Rates[] {
    return this.ratesService.getAll();
  }

  @Get('ruta-error-404')
  @HttpCode(HttpStatus.NOT_FOUND)
  rutaConError404() {
    return 'Esto es un error 404!!';
  }

  @Get(':symbol')
  async find(@Param('symbol') symbol: string) {
    return this.ratesService.getSymbol(symbol);
  }

  @Post()
  @HttpCode(204)
  createProduct(
    @Body('symbol') symbol: string,
    @Body('id_currency') id_currency: number,
    @Body('description') description: string,
    @Body('value') value: string,
    @Body('created_at') created_at: string,
  ) {
    this.ratesService.insert({
      id: this.ratesService.getAll().length,
      id_currency,
      value,
      created_at,
      symbol,
      description,
    });
  }
}
