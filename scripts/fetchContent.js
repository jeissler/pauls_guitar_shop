import 'dotenv/config';

import fs from 'fs';
import { google } from 'googleapis';

const apiKey = process.env.GOOGLE_API_KEY;
const sheetId = process.env.GOOGLE_SHEET_ID;

const sheets = google.sheets({ version: 'v4', auth: apiKey });

const fetchSheet = async (range, outputFile) => {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range,
  });

  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log(`No data found for range ${range}.`);
    return;
  }

  const dataRows = rows.slice(1);
  const entries = dataRows
    .filter(row => (row[0] && row[0].trim() !== '') && (row[1] && row[1].trim() !== ''))
    .map(row => ({
      Section: row[0],
      Content: row[1]
    }));

  const outputDir = './content';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(`${outputDir}/${outputFile}`, JSON.stringify(entries, null, 2));
  console.log(`✅ Sheet content from ${range} written to ${outputFile}`);
};

const fetchAllContent = async () => {
  await fetchSheet('Content!A1:B100', 'content.json');
  // await fetchSheet('Inventory!A1:D500', 'inventory.json');
};

fetchAllContent();