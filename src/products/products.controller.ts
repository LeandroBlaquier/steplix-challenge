import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getId(id);
  }

  @Get('ruta-error-404')
  @HttpCode(HttpStatus.NOT_FOUND)
  rutaConError404() {
    return 'Esto es un error 404!!';
  }

  @Post()
  @HttpCode(204)
  createProduct(
    @Body('description') description: string,
    @Body('symbol') symbol: string,
  ) {
    this.productsService.insert({
      id: this.productsService.getAll().length,
      description,
      symbol,
    });
  }
}
