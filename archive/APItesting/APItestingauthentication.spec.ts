import {test,expect} from "@playwright/test"

// test("Authentication api key", async({request})=>{
//     const resp=await request.put("/booking/2",{
//         headers:{
//             Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
//         },
//         data:{
            
//     "firstname" : "Chezhi",
//     "lastname" : "Brown",
//     "totalprice" : 111,
//     "depositpaid" : true,
//     "bookingdates" : {
//         "checkin" : "2018-01-01",
//         "checkout" : "2019-01-01"
//     },
//     "additionalneeds" : "Breakfast"
// }
        
//     })

//     expect(resp.status()).toBe(200)
// })


//based on the tokenval timing we can either use beforeall/beforeeach 
// as in some cases tokenval timing will be 5secs its purely based on the developer 
let tokenval:string;

test.beforeAll("basic AUTH", async({request})=>{
    const resptoken=await request.post("https://restful-booker.herokuapp.com/auth",{
        data:{
    "username" : "admin",
    "password" : "password123"
}
    })
    tokenval= (await resptoken.json()).token;
    console.log(tokenval)
})

test("BAsic athentication using put", async({request})=>{
    const putresp=await request.put("/booking/3",{
        headers:{
            Cookie:"token="+tokenval
        },
        data:{
    "firstname" : "swathi",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    })
    expect(putresp.status()).toBe(200)
    const respjson=await putresp.json()
    console.log(respjson)
})

test("Basic auth for delete call", async({request})=>{
    const resp=await request.delete("/booking/1",{
        headers:{
            Cookie:"token="+tokenval
        }
    })
    expect(resp.status()).toBe(201)
})