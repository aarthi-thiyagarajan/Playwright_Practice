import {test} from "@playwright/test"

test("mousehover actions", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole('button', { name: 'Point Me' }).hover();
    await page.getByRole('link', { name: 'Mobiles' }).click();
})