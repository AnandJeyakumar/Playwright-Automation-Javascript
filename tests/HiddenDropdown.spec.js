import {test,expect} from "@playwright/test"

test.skip("Hidden",async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()

    await page.waitForTimeout(7000);
    await page.waitForTimeout(3000);

    await page.locator("//span[normalize-space()='PIM']").click()

    // await page.waitForTimeout(7000);
    await page.waitForTimeout(3000);

    // await page.waitForSelector("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]")
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click()


    await page.waitForTimeout(7000);
    await page.waitForTimeout(3000);

    
    let titleoptions= await page.$$(".oxd-select-option span")
    await expect(titleoptions.length).toBe(31);

    for (let i of titleoptions)
    {
        let value = await i.textContent();
        console.log(value)
        // if (value.includes("QA lead"))
    }








})