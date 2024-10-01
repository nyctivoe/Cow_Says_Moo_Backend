import { queryCells } from './functions/queryCells.js';
import { sheetVer, data } from 'globalVar.js';

data = await queryCells('Sheet1', 'A2', 'B2');
console.log('Fetched Data: \n', data);