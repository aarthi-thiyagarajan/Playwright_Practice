import {test, expect} from "@playwright/test"

test("reporter practice 1", async({page})=>{
    await page.goto("http://www.google.com")
    await expect(page).toHaveTitle("Google")
})

test("reporter practice 2", async({page})=>{
    await page.goto("http://www.google.com")
    await expect(page).toHaveTitle("Google1")
})

test("reporter practice 3", async({page})=>{
    await page.goto("http://www.google.com")
    await expect(page).toHaveTitle("Google")
})