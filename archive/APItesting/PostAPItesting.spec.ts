import {test, expect} from "@playwright/test"
//import { request } from "@playwright/test"

test("API testing post call 1",async({request})=>{
    const postresp1=await request.post("/booking",{
        data:{
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
      }

        
    }
        
    )
    const jsonresp=await postresp1.json()
    console.log(jsonresp)
    //expect(postresp1.status()).toBe(200)
    //expect(postresp1.ok()).toBeTruthy()  //used only for ok status
    expect(jsonresp.booking).toMatchObject({
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  })

})

test("API testing UI", async({request,page})=>{
    const postresp=await request.post("https://api.demoblaze.com/addtocart",{
      data:{"id":"e3361e52-858d-56c3-bef9-85d7b89b5a1d","cookie":"user=d24e4569-2f7b-1277-9d6a-d62f1e48949c","prod_id":3,"flag":false

      }//taken from the network in chrome Dev tools
    })
    expect(postresp.status()).toBe(200);

   await page.goto("https://demoblaze.com/index.html")
   await page.getByRole('link', { name: 'Log in' }).click();
   await page.locator('#loginusername').fill("aarthi")
   await page.locator('#loginpassword').fill("aarthi1997")
   await page.getByRole('button', { name: 'Log in' }).click();

   //await page.goto("https://demoblaze.com/cart.html")

})