import {test} from "@playwright/test";

test("practice test case 1",async({page})=>{
  console.log("starting 1");
  await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  console.log("ending 1");
})
test("practice test case 2", async({page})=>{
 console.log("starting 2");
await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  console.log("ending 2");
})

test.beforeAll("practice beforeall",async()=>{
    console.log("executing beforeall")
})

test("practice test case 3", async({page})=>{
console.log("starting 3");
await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  console.log("ending 3");
})

test.afterEach("afterEach practice",async()=>{
    console.log("executing afterEach block");
})

test.describe("grouping test cases", async()=>{

    test.beforeEach("practice beforeEach",async()=>{
        console.log("executing before each block")
    })

test("practice test case 4", async({page})=>{
    console.log("starting 4");
    await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  console.log("ending 4");
})

test("practice test case 5", async({page})=>{
    console.log("starting 5");
    await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  console.log("ending 5");
})

test("practice test case 6", async({page})=>{
    console.log("starting 6");
    await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  console.log("ending 6");
})
})

test("practice test case 7", async({page})=>{
    console.log("starting 7");
    await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  console.log("ending 7");
})
