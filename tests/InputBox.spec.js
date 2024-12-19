import{test,expect} from "@playwright/test"

test ("Input Box", async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page.locator("#name")).toBeVisible();
    await expect(page.locator("#name")).toBeEmpty();
    await expect(page.locator("#name")).toBeEditable();
    await expect(page.locator("#name")).toBeEnabled();


    await page.locator("#name").fill("Om Namashivaya");


    await page.waitForTimeout(5000);

    await expect(page.locator("#name")).toHaveValue("Om Namashivaya");











})