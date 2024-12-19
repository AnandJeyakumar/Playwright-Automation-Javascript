import{test,expect} from "@playwright/test"
import exp from "constants";


test("MultiSelect", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


    // let colorCount = await page.locator("#colors option");
    // await expect(colorCount).toHaveCount(5);

    // let clrArray = await page.$$("#colors option");
    // await expect(clrArray.length).toBe(5);      

    // Presence of text or value

    let colorCount = await page.locator("#colors").textContent()
    await expect(colorCount.includes("Red")).toBeTruthy();
    await expect(colorCount.includes("hjjhj")).toBeFalsy();










})