import { StockResult } from './types';
import {calculateStock} from './utility/stockCalculation';
export const calculateTotal=async(sku: string):Promise<StockResult> => {
    return calculateStock(sku)
}
process.on('uncaughtException', err => {
    console.log(`Exception : ${err.message}`)
    //process.exit(1)
  })
//   let calFunc=calculateTotal("SXB930757/87/87")
//   console.log(calFunc)
// calFunc.then((data)=>{
//     console.log(data)
// })
