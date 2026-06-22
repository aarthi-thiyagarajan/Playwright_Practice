import {test} from "@playwright/test";

test("fill and press sequentially",async({page})=>{
//     await page.goto("https://ultimateqa.com/filling-out-forms/");
//     await page.locator('#et_pb_contact_name_0').fill("aarthi will get the job sure"); //input field
//     await page.locator('#et_pb_contact_message_0').fill("before november 2026"); //textarea field
//     await page.locator('#et_pb_contact_name_0').pressSequentially("aarthi will get the job sure");
//     await page.locator('#et_pb_contact_message_0').pressSequentially("before november 2026",{delay:1000});
    // await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable");
    // await page.locator('iframe[name="iframeResult"]').contentFrame().getByText('This is a paragraph. It is').fill("aarthi");
    
    await page.goto("https://google.com");
    await page.getByRole('button', { name: 'Rechazar todo' }).click();
    await page.getByRole('combobox', { name: 'Buscar' }).pressSequentially("playwright automation");
    //await page.getByRole('combobox', { name: 'Buscar' }).press("ArrowDown+ArrowDown");
    //await page.getByRole('combobox', { name: 'Buscar' }).press("Enter");
    await page.getByRole('combobox', { name: 'Buscar' }).press("Backspace");

})