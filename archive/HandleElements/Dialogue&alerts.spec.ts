import {test, expect} from "@playwright/test";

test.beforeEach("login",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
})

test("handle dialogue",async({page})=>{
    
    page.on("dialog",dialog=>{
        expect(dialog.type()).toEqual("alert");
        expect(dialog.message()).toEqual("I am a JS Alert");
        dialog.accept();
    })
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await expect(page.getByText('You successfully clicked an')).toBeVisible();
})

test("handle confirm dialog", async({page})=>{

    page.on("dialog",dialog=>{
       expect(dialog.type()).toEqual("confirm");
       expect(dialog.message()).toEqual("I am a JS Confirm");
       dialog.dismiss();
       //dialog.accept();

    })
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click(); //we have to provide dialog handle just before the click action

})
test("handle prompt",async({page})=>{

    page.on("dialog",dialog=>{
        expect(dialog.type()).toEqual("prompt");
        expect(dialog.message()).toEqual("I am a JS prompt");
        expect(dialog.defaultValue()).toEqual("");  // to check any preassigned text is there in the text box
        //dialog.accept("Aarthi");
        dialog.dismiss();

    })
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

})