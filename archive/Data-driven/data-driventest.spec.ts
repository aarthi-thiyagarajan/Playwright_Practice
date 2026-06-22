import {test, expect} from "@playwright/test";
import unamedata from "../../test-data/usernamedata.json"
import pssdata from "../../test-data/passworddata.json"

unamedata.forEach((data)=>{
    test.beforeEach("login execution"+data.uname,async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const usernamefield=page.getByTestId('username');
    await usernamefield.fill(data.uname);
    const passwordfield=page.getByTestId('password');
    await passwordfield.fill(pssdata.pword);
    const loginbtton=page.getByTestId('login-button');
    await loginbtton.click();

})


})


test.afterEach("logout execution",async({page})=>{

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByTestId('logout-sidebar-link').click();
})

test("adding item to cart verification",async({page})=>{

    //adding and removing item from cart
    await page.getByTestId('item-4-title-link').click();
    await page.getByTestId('add-to-cart').click();
    await page.getByTestId('shopping-cart-link').click();
    await expect(page.getByTestId('item-4-title-link')).toHaveText("Sauce Labs Backpack");
    await expect(page.getByTestId('remove-sauce-labs-backpack')).toBeVisible();
    await page.getByTestId('remove-sauce-labs-backpack').click();
    await expect(page.getByTestId('item-4-title-link')).not.toBeVisible();

})

