const{test,expect}=require("@playwright/test")

test.skip("auto",async({page})=>{

    await page.goto("https://www.redbus.in/");

    await page.locator("#src").fill("Delhi");

    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]//div/text[1]")

    let cityoptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]//div/text[1]")

    for (let i of cityoptions)
    {
        let value = await i.textContent();
        // console.log(value);
        if(value.includes("India Gate"))
        {
            await i.click();
        }

    }
    await page.waitForTimeout(5000);

})