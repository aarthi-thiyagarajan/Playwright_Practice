import { Page,Locator } from "@playwright/test";

export class Cartpage{
    readonly page:Page;
    readonly itemheading:Locator;

    constructor(page:Page){
        this.page=page;
        this.itemheading=page.getByTestId('item-4-title-link');
    }
}
