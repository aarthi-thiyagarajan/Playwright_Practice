import {expect, test} from "@playwright/test";

test("assertion practice", async({page})=>{
   await page.goto("https://www.saucedemo.com/");
   await expect (page.getByTestId('login-button')).toHaveCount(1);
   await expect (page.getByTestId('login-button')).toHaveId("login-button");
   await expect (page.getByTestId('login-button')).toHaveText("Login");
   await expect (page.getByTestId('login-button')).toBeEnabled();
   await expect.soft(page.getByTestId('login-button')).toBeDisabled();
   await expect (page.getByTestId('login-button')).toBeVisible();
   await expect.soft(page.getByTestId('login-button')).toBeHidden(); //soft assertion that it does not terminate the program
   await expect (page.getByTestId('login-button')).toHaveAttribute('name','login-button');
   await expect (page.getByTestId('login-button')).toHaveClass('submit-button btn_action');
   await expect (page).toHaveURL('https://www.saucedemo.com/');
   await expect (page).toHaveTitle('Swag Labs');
   await expect.soft (page,"this is not correct url").toHaveURL('https://saucedemo');  //custom error

})