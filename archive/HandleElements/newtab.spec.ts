import {test,expect} from "@playwright/test";

test("handle new tabs",async({context})=>{
    const page=await context.newPage();
    await page.goto("https://demoqa.com/browser-windows");
    await expect(page).toHaveTitle("demosite");
    const pagepromse=context.waitForEvent("page");
    await page.getByRole('button', { name: 'New Tab' }).click();
    const newpage=await pagepromse;
    // const [newpage] = await Promise.all([
    // context.waitForEvent("page"),
    // page.getByRole('button', { name: 'New Tab' }).click()]);
    await expect(newpage.locator("#sampleHeading")).toHaveText("This is a sample page");

})