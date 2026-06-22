import {test} from "@playwright/test";


test("my first test script",async({page})=>{
    await page.goto("http://google.com");
    const acceptbtton = page.getByRole('button', { name: 'Aceptar todo' });
    await acceptbtton.click();
    const mylocatorid = page.getByRole('button', { name: 'Aplicaciones de Google' });
    await mylocatorid.click();
    console.log("my first test script is executed")
})

test("my second test script",()=>{
    console.log("my second test script is executed")
})