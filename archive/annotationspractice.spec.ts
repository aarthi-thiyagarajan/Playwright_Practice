import {test} from '@playwright/test';

test.skip(({browserName})=>{return browserName==="chromium"; })  //to skip test execution in chrome for all test cases

test.describe.skip("positive test cases",async()=>{
    //test.skip(({browserName})=>{return browserName==="chromium"; })
    //test.fail(({browserName})=>{return browserName==="chromium"})

test('1st testcase',async({page})=>{
console.log("starting of 1st test case");
console.log("ending of 1st test case");
})

test('2nd testcase',async({page,browserName})=>{
    test.slow();
    //test.slow(browserName==="firefox");
    console.log("starting of 2 test case");
console.log("ending of 2 test case");
})

test('3rd testcase',async({page})=>{
    console.log("starting of 3 test case");
console.log("ending of 3 test case");
})
})

test.skip('4th testcase',async({page})=>{
    console.log("starting of 4 test case");
console.log("ending of 4 test case");
})

// test('4th testcase',async({page})=>{
//     test.skip();
//     console.log("starting of 4 test case");
// console.log("ending of 4 test case");
// })


// test.skip('4th testcase',async({page, browserName})=>{
//     test.skip(browserName==="firefox");
//     console.log("starting of 4 test case");
// console.log("ending of 4 test case");
// })


test.fixme('5th testcase',async({page,browserName})=>{
    //test.fixme();
    //test.fixme(browserName==="chromium");
    console.log("starting of 5 test case");
console.log("ending of 5 test case");
})

test('6th testcase',async({page,browserName})=>{
    test.fail();
    //test.fail(browserName==="chromium")
    console.log("starting of 6 test case");
console.log("ending of 6 test case");
})