import {test,expect} from "@playwright/test"



test("frame",async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // const allframes = page.frames();
    // console.log(allframes.length);

    // // Approch1

    // const frame1= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    // await frame1.fill("//input[@name='mytext1']","Om Namashivaya")
    // // await frame1.locator("//input[@name='mytext1']").fill("Om Namashivaya");

    // Approch 2

    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']");
    await inputBox.fill("Vinayaka");
    await page.waitForTimeout(5000);







})