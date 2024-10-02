import {google} from 'googleapis';
import { apiKey, sheetID } from '../secrets/keys.js';

/*
This function queries a range of cells from a Google Sheet with specified ID and apiKey provided by 'secrets/keys.js'. (deprecated)

Sample usage:
queryCells('Sheet1', 'A1', 'B1');

Expected output: Data in the form of a 2D array with the values from A1 to B1 on Sheet1.
If the cell is empty, it might return undefined or an empty string.
*/
export async function queryCells(page, topLeft, bottomRight) {
    const sheets = google.sheets({ version: 'v4', auth: apiKey });
    const range = page + '!' + topLeft + ':' + bottomRight; // Specify the range you want to query
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: sheetID,
            range: range,
        });

        const rows = response.data.values;
        if (rows && rows.length) {
            return rows;
        } else {
            return [];
        }
    } catch (err) {
        throw err;
    }
}

async function check(page, topLeft, bottomRight) {
    try {
        const data = await queryCells(page, topLeft, bottomRight);
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// ------------------------------------------------------------------------------------------------------------------ //

