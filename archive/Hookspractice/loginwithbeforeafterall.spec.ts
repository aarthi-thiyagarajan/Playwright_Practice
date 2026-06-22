import {test, expect, Page} from "@playwright/test";

let page:Page;

test.beforeAll("execution beforeall",async({browser})=>{
    page=await browser.newPage();
    await page.goto("https://www.saucedemo.com/");
    const usernamefield=page.getByTestId('username');
    await usernamefield.fill("standard_user");
    const passwordfield=page.getByTestId('password');
    await passwordfield.fill("secret_sauce");
    const loginbtton=page.getByTestId('login-button');
    await loginbtton.click();
})



test.afterAll("logout execution",async({})=>{

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByTestId('logout-sidebar-link').click();
})

test("adding item to cart verification",async({})=>{

    //adding and removing item from cart
    await page.getByTestId('item-4-title-link').click();
    await page.getByTestId('add-to-cart').click();
    await page.getByTestId('shopping-cart-link').click();
    await expect(page.getByTestId('item-4-title-link')).toHaveText("Sauce Labs Backpack");
    await expect(page.getByTestId('remove-sauce-labs-backpack')).toBeVisible();
    await page.getByTestId('remove-sauce-labs-backpack').click();
    await expect(page.getByTestId('item-4-title-link')).not.toBeVisible();

})

test("empty cart verification",async({})=>{

    await page.getByTestId('shopping-cart-link').click();
    await expect(page.getByTestId('inventory-item')).not.toBeVisible();
})
