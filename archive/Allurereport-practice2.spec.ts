import {test, expect} from "@playwright/test"

test("reporter practice 4", async({page})=>{
    await page.goto("http://www.google.com")
    await expect(page).toHaveTitle("Google")
})

test("reporter practice 5", async({page})=>{
    await page.goto("http://www.google.com")
    await expect(page).toHaveTitle("Google")
})

test("reporter practice 6", async({page})=>{
    await page.goto("http://www.google.com")
    await expect(page).toHaveTitle("Google")
})