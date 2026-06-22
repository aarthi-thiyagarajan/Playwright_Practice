import {Page, Locator} from "@playwright/test";

export class LoginPage{
  readonly page : Page;
  readonly usernametext : Locator;
  readonly passwordtext : Locator;
  readonly loginbtton : Locator;


    constructor (page:Page){
        this.page=page;
        this.usernametext=page.locator("#user-name");
        this.passwordtext=page.locator("#password");
        this.loginbtton=page.locator("#login-button");
   }

   async openapplication(){
     await this.page.goto("https://www.saucedemo.com/");
   }

   async loginPage(usernameval:string, passwordval:string){
    await this.usernametext.fill(usernameval);
    await this.passwordtext.fill(passwordval);
    await this.loginbtton.click();
   }
}