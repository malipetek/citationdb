require('dotenv').config();
if (process.env.AIRTABLE_TOKEN === undefined) {
  console.error('Please set the AIRTABLE_TOKEN environment variable');
  process.exit(1);
}

const Airtable = require('airtable');
const fs = require('fs');

Airtable.configure({
  apiKey: process.env.AIRTABLE_TOKEN
});
const base = Airtable.base('appn80Y1csBuNkzfO');

async function downloadTable(tableName) {
  const records = await base(tableName).select().all();
  const jsonRecords = records.map(record => record._rawJson.fields);
  // save json files
  fs.writeFileSync(`./src/CitationDB/Data/from_airtable/${tableName}.json`, JSON.stringify(jsonRecords, null, 2));
}


async function downloadAllTables() {
  const tableNames = ['Resource', 'Footnote', 'Author', 'Publication'];
  for (const tableName of tableNames) {
    await downloadTable(tableName);
  }
}

downloadAllTables();