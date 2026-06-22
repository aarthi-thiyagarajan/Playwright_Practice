import {test, request, APIRequestContext, expect} from "@playwright/test"

let recontext:APIRequestContext;

test.beforeAll("url giving",async()=>{
    recontext=await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    })
})

//using direct request fixture which is of APIcontext
test("API testing practice 1",async({request})=>{
   
    const response1= await request.get("https://restful-booker.herokuapp.com/booking",{
        headers:{
            Accept:"application/json"
        }
    });
    console.log(await response1.json())
})

//used request from import playwright/test and created context of that
test("API testing practice 2", async()=>{
   const reqcontext = await request.newContext({
    baseURL:"https://restful-booker.herokuapp.com",
    extraHTTPHeaders:{
        Accept:"application/json"
    }
   })

   const response2=await reqcontext.get("/booking");
   console.log(await response2.json())
})

//accesssed the baseurl from beforall
test("API testing practice 3", async()=>{
    const resp3=await recontext.get("/booking");
    console.log(await resp3.json())

})

//accessed the baseurl from config.ts
test("API testing practice 4",async({request})=>{
    const resp4=await request.get("/booking")
    console.log(await resp4.json())
})

test("API testing practice 5",async({request})=>{
    const resp5=await request.get("/booking/2");
    console.log(await resp5.json())
})

//one way to give query parameter
test("API testing practice 6",async({request})=>{
   const resp6=await request.get("/booking?firstname=John&lastname=Smith")
   console.log(await resp6.json())
})
//another way to give query parameter
test("API testing practice 7",async({request})=>{
   const resp6=await request.get("/booking",{
    params:{
        firstname:"John",
        lastname:"Smith"
    }
   })
   console.log(await resp6.json())
})

test("API testing practice 8",async({request})=>{
    const resp5=await request.get("/booking/3");
    console.log(await resp5.json())
   expect(resp5.status()).toBe(200);
    expect(resp5.ok()).toBeTruthy();
    expect(await resp5.json()).toMatchObject({
    "firstname": "Eric",
    "lastname": "Jackson",
    "totalprice": 476,
    "depositpaid": false,
    "bookingdates": {
        "checkin": "2020-03-12",
        "checkout": "2023-11-05"
    }
})

    const jsonresponse=await resp5.json()
    expect(jsonresponse.firstname).toEqual("Eric")
})

test("API with UI verification",async({request,page})=>{
    const resp2=await request.get("https://api.demoblaze.com/entries")
    const jsonresp2=await resp2.json() 
    const title1=jsonresp2.Items[0].title;
    console.log(title1)

    await page.goto("https://demoblaze.com/");
   await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(title1)


})