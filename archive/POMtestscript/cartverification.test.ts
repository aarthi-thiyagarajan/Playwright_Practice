import {expect, test} from "@playwright/test"
import { LoginPage } from "../../Pages(POM)/Loginpage"
import { HomePage } from "../../Pages(POM)/Homepage";
import { Cartpage } from "../../Pages(POM)/Cartpage";

test("cartverification", async({page})=>{
    const loginpageobj = new LoginPage(page);
    await loginpageobj.openapplication();
    await loginpageobj.loginPage("standard_user","secret_sauce");
    const homepageobj = new HomePage(page);
    await expect(homepageobj.homepageHeading).toHaveText("Swag Labs");
    await homepageobj.backpackaddingtocart();
    await expect(homepageobj.addtocartIcon).toHaveText("1");
    await expect(homepageobj.removebtton).toBeVisible();
    await homepageobj.gotocarticon();
    const cartpagepobj = new Cartpage(page);
    await expect(cartpagepobj.itemheading).toHaveText("Sauce Labs Backpack")
})