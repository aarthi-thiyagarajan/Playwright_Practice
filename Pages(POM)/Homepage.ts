import { Page, Locator } from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly homepageHeading: Locator;
    readonly addtocartbtton: Locator;
    readonly removebtton: Locator;
    readonly addtocartIcon: Locator;
    


    constructor(page:Page){
       this.page=page;
       this.homepageHeading=page.getByText('Swag Labs');
       this.addtocartbtton=page.getByTestId('add-to-cart-sauce-labs-backpack');
       this.removebtton=page.getByTestId('remove-sauce-labs-backpack');
       this.addtocartIcon=page.getByTestId('shopping-cart-link')
       
    }

    async backpackaddingtocart(){
    
        await this.addtocartbtton.click();

    }
    async gotocarticon(){
        await this.addtocartIcon.click();
    }
}

