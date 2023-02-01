import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Rates } from './interfaces/rates.interface';

@Injectable()
export class RatesService {
  private rates: Rates[] = [
    {
      id: 252,
      id_currency: 1,
      value: '11924.231233',
      created_at: '2020-09-01 16:23:02',
      currency: {
        id: 1,
        description: 'bitcoin',
        symbol: 'BTC',
      },
    },
    {
      id: 250,
      id_currency: 2,
      value: '308.313553',
      created_at: '2020-09-01 16:13:51',
      currency: {
        id: 2,
        description: 'etherum”',
        symbol: 'ETH',
      },
    },
    {
      id: 255,
      id_currency: 3,
      value: '0.0990881',
      created_at: '2020-09-01 16:23:40',
      currency: {
        id: 3,
        description: 'cardano',
        symbol: 'ADA',
      },
    },
  ];

  getAll(): Rates[] {
    return this.rates;
  }

  getSymbol(symbol: string) {
    const symbolSearch = this.rates.find(
      (i: Rates) => i.currency.symbol == symbol,
    );
    if (symbolSearch) {
      return symbolSearch;
    } else {
      throw new NotFoundException(`No encontramos ${symbol}`);
    }
  }

  private lastId(): number {
    return this.rates[this.rates.length - 1].id;
  }

  insert(body: any) {
    this.rates = [
      ...this.rates,
      {
        id: this.lastId() + 1,
        id_currency: body.id_currency,
        value: body.value,
        created_at: body.created_at,
        currency: {
          id: body.currency.id,
          description: body.currency.description,
          symbol: body.currency.description,
        },
      },
    ];
  }
}
