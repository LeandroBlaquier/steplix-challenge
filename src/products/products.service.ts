import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      description: 'bitcoin',
      symbol: 'BTC',
    },
    {
      id: 2,
      description: 'etherum',
      symbol: 'ETH',
    },
    {
      id: 3,
      description: 'cardano”',
      symbol: 'ADA',
    },
  ];

  getAll(): Product[] {
    return this.products;
  }

  getId(id: number): Product {
    const product = this.products.find((item: Product) => item.id == id);
    if (product) {
      return product;
    } else {
      throw new NotFoundException(`No encontramos el producto ${id}`);
    }
  }

  insert(body: any) {
    this.products = [
      ...this.products,
      {
        id: this.lastId() + 1,
        description: body.description,
        symbol: body.symbol,
      },
    ];
  }

  update(id: number, body: any) {
    const product: Product = {
      id,
      description: body.description,
      symbol: body.symbol,
    };
    this.products = this.products.map((item: Product) => {
      return item.id == id ? product : item;
    });
  }

  private lastId(): number {
    return this.products[this.products.length - 1].id;
  }
}
