const{test,expect}=require("@playwright/test");
const { waitForDebugger } = require("inspector");



test("Bootstrap",async({page})=>{

    await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2");



    await page.locator("button.multiselect").click()

    // to verify count

    // let count = await page.locator("ul li a label input");
    // await expect(count).toHaveCount(11);

    // Select Options from Dropdown

    let count = await page.$$("ul li a label ");
    await expect(count.length).toBe(14);


    for (let option of count)
    {
        let text = await option.textContent();
        if (text.includes("Angular") || text.includes("Java"))
        {
            await option.click()
        }
    }
    await page.waitForTimeout(5000);




})