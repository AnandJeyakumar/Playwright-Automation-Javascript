import{test,expect} from "@playwright/test"
import exp from "constants"


test("dropdown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // Selecting ny lable and test
    // await page.locator("#country").selectOption({label : "Germany" })
    // Selecting by text
    // await page.locator("#country").selectOption("Germany")
    // await page.selectOption("#country","Germany");
    // await page.locator("#country").selectOption({value : "usa" });
    // await page.waitForTimeout(3000);
    // await page.locator("#country").selectOption({index : 4 });



    // Assertions
    //1- Number of options in dropdown
    // let options =  await page.locator("#country option")
    // await expect(options).toHaveCount(10)

    // //2- Number of options in dropdown by $$ Arrray]
    // let optionsArray =  await page.$$("#country option")
    // await expect(optionsArray.length).toBe(10)

    // 3 check presence of text in dropdown
    let options =  await page.locator("#country").textContent();
    await expect(options.includes("United Kingdom")).toBeTruthy();
    await expect(options.includes("jjjj")).toBeFalsy();
    await page.waitForTimeout(2000);

    // 4 Checking by loop
    let opArray = await page.$$("#country option");
    let status = false;

    for (let i of opArray)
    {
        let text = await i.textContent();
        // if(text.includes("France"))
        //     {
        //         await page.selectOption(i)
        //     }
        if(text.includes("France"))
        {
            await page.selectOption("#country","France");
            status=true;
            break;
        }
    }
    await expect(status).toBeTruthy()

    await page.waitForTimeout(5000);

})