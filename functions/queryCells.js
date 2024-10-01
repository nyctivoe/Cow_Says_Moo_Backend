// Step 1: Load the required libraries
import {google} from 'googleapis';
import {apiKey, sheetID} from '../secrets/keys.js'; // Import the API key from a separate file

// Step 2: Authenticate using the API key 
const sheets = google.sheets({ version: 'v4', auth: apiKey });

export async function queryCells(page, topLeft, bottomRight) {
    const range = page + '!' + topLeft + ':' + bottomRight; // Specify the range you want to query

    try {
        // Step 3: Query the specific cells
        const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetID,
        range: range,
        });

        const rows = response.data.values;
        if (rows && rows.length) {
        // Return the array of values
        return rows;
        } else {
        console.log('No data found.');
        return [];
        }
    } catch (err) {
        console.error('The API returned an error:', err);
        throw err; // Rethrow the error to be handled by the caller
    }
}

async function check(page, topLeft, bottomRight) {
    try {
        const data = await queryCells(page, topLeft, bottomRight);
        console.log('Fetched Data:', data);
        // You can now work with the 'data' array as needed
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
    

/*
Sample usage:
queryCells('Sheet1', 'A1', 'B1');

Expected output: Data in the form of a 2D array with the values from A1 to B1 on Sheet1.
If the cell is empty, it might return undefined or an empty string.
*/