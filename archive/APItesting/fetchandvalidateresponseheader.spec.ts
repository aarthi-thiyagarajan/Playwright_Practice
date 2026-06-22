import {test,expect} from "@playwright/test"

test("fetchandvalidateheaders", async({request})=>{
    const respon=await request.get("/booking/2")
    const headersresp=respon.headers()
    console.log(headersresp)
    expect(headersresp.server).toEqual("Heroku")
    expect(headersresp['x-powered-by']).toEqual("Express")


    const headersarray= respon.headersArray();
    console.log(headersarray)
    expect(headersarray.length).toBe(10)
console.log("%%%%%%%%%%%%%%%%%%%")
    headersarray.forEach(header => {
        console.log(header.name+":::::"+header.value)
    });
})