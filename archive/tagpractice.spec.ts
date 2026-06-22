import {test} from "@playwright/test"


test.describe("grouping",{tag:"@sanity"}, async()=>{

    test("practice test 1 @UI",async({page})=>{
    console.log("test 1")
})

test("practice test 2 @API",async({page})=>{
    console.log("test 2")
})

test("practice test 3 @smoke",async({page})=>{
    console.log("test 3")
})

})

test("practice test 4",{tag:["@UI","@smoke"]},async({page})=>{
    console.log("test 4")
})

test("practice test 5",{tag:"@API"},async({page})=>{
    console.log("test 5")
})

test("practice test 6",{tag:"@API"},async({page})=>{
    console.log("test 6")
})
