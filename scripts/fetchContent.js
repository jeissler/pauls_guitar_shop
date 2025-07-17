import 'dotenv/config';

import fs from 'fs';
import { google } from 'googleapis';

const apiKey = process.env.GOOGLE_API_KEY;
const sheetId = process.env.GOOGLE_SHEET_ID;
const range = 'Sheet1!A1:B100';

const sheets = google.sheets({ version: 'v4', auth: apiKey });

const fetchSheet = async () => {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range,
  });

  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log('No data found.');
    return;
  }

  const headers = rows[0];
  const entries = rows.slice(1).map(row => {
    const entry = {};
    headers.forEach((h, i) => entry[h] = row[i] || '');
    return entry;
  });

  const outputDir = './content';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(`${outputDir}/content.json`, JSON.stringify(entries, null, 2));
  console.log('✅ Sheet content written to json');
};

fetchSheet();