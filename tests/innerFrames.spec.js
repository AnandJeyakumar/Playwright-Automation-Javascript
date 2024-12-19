import {test,expect} from "@playwright/test"



test("frame",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");




    const frame3= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});


    const childFrames= await frame3.childFrames()
    childFrames[0].locator("//*[@id='i5']/div[3]/div").check()

    await page.waitForTimeout(5000);


    // await frame3.fill("//input[@name='mytext1']","Om Namashivaya")
    // await frame1.locator("//input[@name='mytext1']").fill("Om Namashivaya");






})