import{test,expect} from "@playwright/test"
import exp from "constants"

test ("Soft Assertion", async({page})=>{

    await page.goto("https://demo.nopcommerce.com/register")

    // // Hard Assertions
    // await expect(page).toHaveURL("https://demo.nopcommerce.com/registerrr")
    // await expect(page).toHaveTitle("nopCommerce demo store. Register")
    // await expect(await page.locator(".page-title")).toBeVisible();

    // soft Assertions
    await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/registerrr")
    await expect.soft(page).toHaveTitle("nopCommerce demo store. Register")
    await expect.soft(await page.locator(".page-title")).toBeVisible();


})