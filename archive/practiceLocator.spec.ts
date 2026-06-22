import {test} from "@playwright/test";

test("locators practice", async({page})=>{
     await page.goto("https://www.saucedemo.com/");
     const usernamefield = page.locator('//*[@id="user-name"]');   // using XPath locator
     await usernamefield.fill("problem_user");
     const passwordfield = page.locator('#password');  // using idvalue css selector
     await passwordfield.fill("secret_sauce");
    //  const loginbtton = page.locator(".submit-button");  // using classname css selector
    //  await loginbtton.click();
     const loginbtton = page.locator("[value=Login]");  //using attribute css selector
     await loginbtton.click();
    // const textname = page.locator('text=Sauce labs backpack');  //case insensitive sauce labs backpack is not in the quotes
    //  await textname.click();
    // const usingid = page.locator("id=add-to-cart-sauce-labs-backpack");  // using id
    //await usingid.click();
   const usingdatatext = page.locator('data-test=add-to-cart-sauce-labs-backpack');
    await usingdatatext.click();
    const textname = page.locator('text="Sauce Labs Backpack"')  // case sensitive
    await textname.click();   
})

test("locator with options", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const usernamefield=page.locator(".form_group",{has: page.locator("#user-name")});
    await usernamefield.click();
    await usernamefield.pressSequentially("standard_user");
    const passwordfield=page.locator(".form_group",{hasNot: page.locator("#user-name")});
    await passwordfield.click();
    await passwordfield.pressSequentially("secret_sauce");
    const loginbton= page.locator("#login-button");
    await loginbton.click();
    const hastextusage=page.locator("//a",{hasText:"Sauce Labs Backpack"});
    //await hastextusage.click();
    const hasnotextusage=page.locator(".inventory_item_name",{hasNotText:/Sauce.*/});
    await hasnotextusage.click();

})

test("getbymethods",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const testid=page.getByTestId("password"); // i have customize the testid as there is only data-test i need to specify that in config.ts file under use
    await testid.fill("aarthi");
    const testids=page.getByTestId('login-password'); // here normally i have taken using testid
   console.log( await testids.textContent());
   const bytext=page.getByText('Swag Labs');
   console.log(await bytext.textContent());
   const placeholde=page.getByPlaceholder("Username");
   await placeholde.fill("jagan");
})