import {test} from "@playwright/test"

test("handle multiple environments",async({page})=>{
    console.log(process.env.URL)
    console.log(process.env.USERNAME)
    console.log(process.env.PASSWORD)

    const urlval = process.env.URL as string
    await page.goto(urlval)
    await page.getByTestId('username').fill(<string> process.env.USERNAME)
    await page.getByTestId('password').fill(process.env.PASSWORD as string)

})