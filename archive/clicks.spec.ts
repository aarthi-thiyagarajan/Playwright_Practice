import {test} from "@playwright/test";

test("click operations",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await page.getByRole('button', { name: 'Add Element' }).click();
    await page.getByRole('button', { name: 'Add Element' }).dblclick();
})

test("rightclick operation",async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    await page.getByText('right click me', { exact: true }).click({button:"right"});
    await page.waitForTimeout(2000);
    await page.getByRole('listitem').filter({ hasText: 'Edit' }).click();
    //await page.getByRole('heading', { name: 'Example code: Simple Context' }).click({button:"right"});
})