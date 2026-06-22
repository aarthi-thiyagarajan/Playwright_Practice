import {test} from "@playwright/test"

test("handle select drop down with value and visible text",async({page})=>{
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    await page.getByRole('button', { name: 'AGREE' }).click();
    const dropdown=page.locator('#testingDropdown')
    //await dropdown.selectOption("Manual");  //value
    //await dropdown.selectOption("Manual Testing")  //visible text
    //await dropdown.selectOption({value:"Performance"}) // by object method using value and attribute value
    //await dropdown.selectOption({label:"Database Testing"}) // by object method using label and visible text
    await dropdown.selectOption({index:0}); // using index value
})

test("handle select drop down with label",async({page})=>{
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label");
    await page.locator('iframe[title="FastCMP"]').contentFrame().getByRole('button', { name: 'Accept' }).click();
    const dropdown=page.locator('iframe[name="iframeResult"]').contentFrame().getByLabel('Choose a car:')
    //await dropdown.selectOption("Saab") //label
    await dropdown.selectOption({label:"Mercedes"}) //by object method using label and attribute value
})

test("handle multiselect dropdown",async({page})=>{
    await page.goto("https://demoqa.com/select-menu");
    const dropdown=page.locator('#cars')
    dropdown.selectOption(['Opel','Volvo','Audi']);
})