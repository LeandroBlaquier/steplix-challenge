import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';

import { UsersController } from './controllers/users/users.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { RatesModule } from './rates/rates.module';

@Module({
  imports: [ProductsModule, RatesModule],
  controllers: [AppController, ProductsController, UsersController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
