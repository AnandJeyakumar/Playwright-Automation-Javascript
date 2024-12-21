import {test,expect} from "@playwright/test"
import exp from "constants";
import { waitForDebugger } from "inspector";

test.skip ("Assertion", async({page})=>{

    // TO have URL

    await page.goto("https://demo.nopcommerce.com/register");
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

    // To Have title
    await expect(page).toHaveTitle("nopCommerce demo store. Register");
    // To be visible
    await expect(await page.locator(".header-logo a img")).toBeVisible

    // To be enabled
    const emailInput =await page.locator("#FirstName");
    await expect(emailInput).toBeEnabled();

    // To be checked
    const genderRadioButton = await page.locator("#gender-male");
    genderRadioButton.click();
    await expect(genderRadioButton).toBeChecked()

    // To Have Attriute
    await expect(await page.locator("//*[@id='register-button']")).toHaveAttribute("type","submit");

    // to have text
    await expect(await page.locator(".page-title h1")).toHaveText("Register");
    
    // To Have Value
    const FristNameInput = await page.locator("#FirstName");
    await FristNameInput.fill("AAaa@aaa");
    await expect(FristNameInput).toHaveValue("AAaa@aaa");

    // To have count
    const count = await page.$$("select[name='DateOfBirthDay'] option");
    console.log(count.length)
    await expect(count).toHaveCount(32);
    // await expect(count).t



}



)