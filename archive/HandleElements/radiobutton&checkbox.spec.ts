import {test, expect, Page} from "@playwright/test"



test.beforeEach("opening the link",async({page})=>{
     
     await page.goto("https://artoftesting.com/samplesiteforselenium");
    await page.getByRole('button', { name: 'AGREE' }).click();
})

test("radio button",async({page})=>{

    const maleradiobtton = page.locator("#male");
    await maleradiobtton.check();
    await expect(maleradiobtton).toBeChecked();
    const femaleradiobtton = page.locator("#female");
    await femaleradiobtton.check();
    await expect(maleradiobtton).not.toBeChecked();

})
test("handle checkbox",async({page})=>{
    const automationcheckbox=page.locator(".Automation");
    await automationcheckbox.check();
    await expect(page.locator(".Automation")).toBeChecked();
    const secondcheckbox=page.locator(".Performance");
    await secondcheckbox.check();
    await expect(page.locator(".Performance")).toBeChecked();
    await automationcheckbox.uncheck();
    await expect(automationcheckbox).not.toBeChecked();

    if (await secondcheckbox.isChecked()){
        await secondcheckbox.uncheck();
        console.log("element was checked before")
    }

})