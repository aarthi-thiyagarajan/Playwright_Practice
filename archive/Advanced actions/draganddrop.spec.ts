import{expect, test} from "@playwright/test";

test("drag and drop actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //approach one manual way to drag and drop
    // await page.locator('#draggable').hover();
    // await page.mouse.down();
    // await page.locator('#droppable').hover();
    // await page.mouse.up();
    // await expect(page.locator('#droppable')).toHaveText("Dropped!")

    //approach 2 dragto()
    //await page.locator('#draggable').dragTo(page.locator('#droppable'))
    //  await expect(page.locator('#droppable')).toHaveText("Dropped!")


    //approach 3 using position
    await page.locator('#draggable').dragTo(page.locator('#droppable'),{
        sourcePosition:{x:0,y:0},
        targetPosition:{x:0,y:0}
    })
    await expect(page.locator('#droppable')).toHaveText("Dropped!")
})