import stock from "../data/stock.json";
import transaction from "../data/transactions.json";
import { Stock, StockResult, StockTransaction } from "../types/index";
export const calculateStock = (sku: string): StockResult => {
  const skuObject: StockResult = getStockBySku(sku);
  const calTotal:StockResult = calculateSkuQty(skuObject,sku);
  return calTotal;
};

const getStockBySku = (sku: string): StockResult => {
  return stock
    .filter((item: Stock) => {
      return item.sku === sku;
    })
    .reduce(
      (prevObj: StockResult, field) => {
        return {
          ...prevObj,
          sku: field.sku,
          qty: field.stock + prevObj.qty,
        };
      },
      { sku: "", qty: 0 }
    );
};

const calculateSkuQty = (skuObject: StockResult,sku:string): StockResult => {
    let status=false;
  transaction.forEach((item: StockTransaction) => {
    if(skuObject.sku===sku){
      if (item.type === 'order') {
        status=true
      skuObject.qty -= item.qty;
    }
    else if (item.type === 'refund') {
        status=true
      skuObject.qty += item.qty;
    }
    }
  
  });
  if(!status){
    
    throw Error('Sku does not exist');
  }
  return skuObject
 ;
};
