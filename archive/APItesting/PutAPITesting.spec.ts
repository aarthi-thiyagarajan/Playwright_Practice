import {expect, test} from "@playwright/test"

test("PUT method",async({request})=>{
    const resp=await request.put("/booking/2",{
        headers:{
             Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
    "firstname" : "aarthi",
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
    const jsonresp=await resp.json()
    console.log(jsonresp)
    expect(jsonresp.firstname).toEqual("aarthi")
    expect(resp.status()).toBe(200)
})