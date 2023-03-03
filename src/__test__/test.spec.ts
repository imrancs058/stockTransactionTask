
//const calculateTotal=require('../index')
import {calculateTotal} from '../index'
describe('Test cases for stock calculation',()=>{
    it('get total stock which exist in stock and transaction files',()=>{
        
        calculateTotal('CLQ274846/07/46').then(async(result:any)=>{
            expect(typeof result.qty).toBe('number');
        })
    })
    it('get error if sku does not exist in any file',()=>{
        
        calculateTotal('CLQ274846').then(async(result:any)=>{
            expect(typeof result.qty).toThrowError('number');
        }).catch((err)=>{
            expect(typeof err.message).toBe('string')
        })
    })
})