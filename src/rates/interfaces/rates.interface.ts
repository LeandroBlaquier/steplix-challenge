export interface Rates {
  id: number;
  id_currency: number;
  value: string;
  created_at: string;
  currency: {
    id: number;
    description: string;
    symbol: string;
  };
}
