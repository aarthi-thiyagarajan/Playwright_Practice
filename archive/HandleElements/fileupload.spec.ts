import {test, expect} from "@playwright/test"

test("file upload 1",async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    //await page.getByRole('button', { name: 'Choose File' }).setInputFiles("filestoupload/F1.txt")  //single file upload
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles
    (["filestoupload/F1.txt","filestoupload/Book1.xlsx","filestoupload/F2.docx"])  //upload multiple files
    
    //remove the uploaded files
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles([])


})

//field with input as file type
test("file upload 2",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    const filechoosepromise=page.waitForEvent("filechooser");
    await page.locator('#drag-drop-upload').click();
    const pageresolved= await filechoosepromise;
    //await pageresolved.setFiles("filestoupload/Book1.xlsx");
    await pageresolved.setFiles(["filestoupload/F1.txt","filestoupload/Book1.xlsx","filestoupload/F2.docx"])



})