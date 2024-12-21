import{test,expect} from "@playwright/test"
import exp from "constants";


test("Radio Button",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")


    await page.locator("#male").check();


    await expect(page.locator("#male")).toBeChecked();
    await expect(page.locator("#male").isChecked()).toBeTruthy();

    await expect(await page.locator("#female").isChecked()).toBeFalsy();



    await   page.waitForTimeout(5000);







})