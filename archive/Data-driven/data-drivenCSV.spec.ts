import {test} from "@playwright/test"
import path from "path";
import fs from "fs";
import {parse} from "csv-parse/sync"

const csvFilePath = path.resolve(__dirname, 'D:/Playwright/test-data/data.csv');
const fileContent = fs.readFileSync(csvFilePath, 'utf-8');

const records = parse(fileContent, {
  columns: true,           // Uses the first row (headers) as object keys
  skip_empty_lines: true,   // Dynamically bypasses empty rows
  trim:true            // Removes whitespace around cells
  // delimiter:";" 
}) as any[];

// records.forEach((record)=>{
//     test("data driven from csv"+ record.id, async({page})=>{
//     //console.log(records)
//     await page.goto("https://demoqa.com/automation-practice-form");
//      await page.getByRole('textbox', { name: 'First Name' }).fill(record.firstname);
//     await page.getByRole('textbox', { name: 'Last Name' }).fill(record.lastname);
// })
// })

for (const record of records){
test("data driven from csv"+ record.id, async({page})=>{
    //console.log(records)
    await page.goto("https://demoqa.com/automation-practice-form");
     await page.getByRole('textbox', { name: 'First Name' }).fill(record.firstname);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(record.lastname);
})
}


