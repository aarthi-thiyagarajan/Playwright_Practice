import {expect, request, test} from "@playwright/test"
import APIdata from "D:\\Playwright\\test-data\\apidata.json"

test("postcalldatafrom json",async({request})=>{
   const postresponse= await request.post("/booking",{
        data: APIdata.postcalldata
    }
    )
     const postrespjson=await postresponse.json()
    expect (postrespjson.booking).toMatchObject(APIdata.postcalldata)
    expect(postrespjson.booking.additionalneeds).toEqual(APIdata.postcalldata.additionalneeds)
})


test("putcalldatafrom json",async({request})=>{
    const putresp=await request.put("/booking/200",{
        headers:{
             Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:APIdata.putcalldata
    

})
    const putrespjson = await putresp.json()
    console.log(putrespjson)
   //expect (putrespjson.booking).toMatchObject(APIdata.putcalldata)
    
})