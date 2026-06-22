import {expect, test} from "@playwright/test"

test("deleteapitesting", async({request})=>{
    const resp=await request.delete("/booking/16",{
        headers:{
             Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
    });
    expect(resp.status()).toBe(201)
    const respontext=await resp.text()
    console.log(respontext)
    expect(respontext).toEqual("Created")

    //we cant able to delete the same data again and again so for every execution give different id
    const getresp=await request.get("/booking/10")
    console.log(getresp.status())
    expect(getresp.status()).toBe(404)
})