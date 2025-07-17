import 'dotenv/config';

import fs from 'fs';
import { google } from 'googleapis';

const apiKey = process.env.GOOGLE_API_KEY;
const sheetId = process.env.GOOGLE_SHEET_ID;
const range = 'Content!A1:B100';

const sheets = google.sheets({ version: 'v4', auth: apiKey });

// Only these sections are allowed to have multiline content
const multilineSections = new Set(['open_hours', 'services_list']);

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

  const dataRows = rows.slice(1);
  
  const entries = [];
  let currentEntry = null;
  
  dataRows.forEach(row => {
    const section = row[0] || '';
    const content = row[1] || '';
    
    if (section && section.trim() !== '') {
      if (currentEntry && currentEntry.Section && currentEntry.Content) {
        entries.push(currentEntry);
      }
      currentEntry = {
        Section: section,
        Content: content
      };
    } else if (content && content.trim() !== '') {
      // Only append to previous entry if it's a known multiline section
      if (currentEntry && multilineSections.has(currentEntry.Section)) {
        currentEntry.Content = currentEntry.Content 
          ? currentEntry.Content + '\n' + content
          : content;
      } else {
        // Otherwise, skip this orphaned line
        // Optionally, log a warning here
      }
    }
  });
  
  if (currentEntry && currentEntry.Section && currentEntry.Content) {
    entries.push(currentEntry);
  }

  const outputDir = './content';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(`${outputDir}/content.json`, JSON.stringify(entries, null, 2));
  console.log('✅ Sheet content written to json');
};

fetchSheet();