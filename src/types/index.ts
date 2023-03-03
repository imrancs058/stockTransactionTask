export type Stock = {
  sku: string;
  stock: number;
};
type Qty = { qty: number };
type TransactionType = { type: string };
export type StockResult = Pick<Stock, 'sku'> & Qty;
export type StockTransaction = StockResult & TransactionType;

