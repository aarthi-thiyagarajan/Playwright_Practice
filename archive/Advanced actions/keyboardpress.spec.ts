import {test} from "@playwright/test"

test("keyboard press",async({page})=>{
    await page.goto("https://testpages.eviltester.com/pages/forms/html-form/");
    const commenttextarea = page.getByText('Comments...')
    await commenttextarea.press("Control+a")
    await commenttextarea.press("Backspace")
    await commenttextarea.press("a+B+c")
    await commenttextarea.press("Control+a+x")
    const usernamefield = page.locator('input[name="username"]')
    await usernamefield.press("Control+v")
    await usernamefield.press("ArrowLeft+ArrowLeft+ArrowLeft")
    await usernamefield.press("X")
    await page.keyboard.press("PageUp")
    await page.keyboard.press("PageDown")
    

})