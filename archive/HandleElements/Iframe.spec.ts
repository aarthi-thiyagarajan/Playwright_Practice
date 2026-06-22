import {test} from "@playwright/test";

test("handle iframe with name",async({page})=>{
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form");
    await page.locator('iframe[title="FastCMP"]').contentFrame().getByRole('button', { name: 'Accept' }).click();
    const w3frame=page.frame("iframeResult");
    await w3frame?.locator("#fname").fill("i will get the job");

})

test("handle iframe with url",async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    await page.locator('iframe[title="FastCMP"]').first().contentFrame().getByRole('button', { name: 'Accept' }).click();
    const w3frameusingurl=page.frame({url:"https://www.w3schools.com/html/default.asp"});
    //await w3frameusingurl?.getByRole('button', { name: 'Button to open search field' }).click();
    //await w3frameusingurl?.getByRole('textbox', { name: 'Search field' }).fill("automation");

})

test("handle iframe with locator",async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    await page.locator('iframe[title="FastCMP"]').first().contentFrame().getByRole('button', { name: 'Accept' }).click();
    const w3frame=page.frameLocator("[title='W3Schools HTML Tutorial']");
    // await w3frame?.getByRole('button', { name: 'Button to open search field' }).click();
    //await w3frame?.getByRole('textbox', { name: 'Search field' }).fill("automation");
})