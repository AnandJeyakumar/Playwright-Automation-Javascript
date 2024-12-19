import{test,expect} from "@playwright/test"
import exp from "constants";


test("Radio Button",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")


    await page.locator("#monday").check();


    await expect(page.locator("#monday")).toBeChecked();
    await expect(page.locator("#monday").isChecked()).toBeTruthy();

    await expect(await page.locator("#sunday").isChecked()).toBeFalsy();



    // Multiple Checkbox Creation in a Array

    const checkBoxes =["#sunday","#tuesday","#thursday"];

    for (const i of checkBoxes){

        await page.locator(i).check()
        await expect(await page.locator(i).isChecked()).toBeTruthy();
        
    }
    await   page.waitForTimeout(3000);

    // Unselect the selected

    for (const loc  of checkBoxes)
    {
        console.log("Inside for")

        if (await page.locator(loc).isChecked())
                console.log("Inside if")

            await page.locator(loc).uncheck();

    }

    await   page.waitForTimeout(5000);



})