import {test,expect} from "@playwright/test"
import exp from "constants"


test.skip("Alert with Ok",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

page.on("dialog",async dialog =>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept();
})
await page.locator("//button[normalize-space()='Alert']").click()
await page.waitForTimeout(5000);
})


test.skip("Confirmation Dialog alert  with Ok and cancel",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


page.on("dialog",async dialog =>{
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    await dialog.accept();
})
await page.locator("//button[normalize-space()='Confirm Box']").click()
let msg = await page.locator("//p[@id='demo']").textContent()
await expect(await page.locator("//p[@id='demo']")).toHaveText("You pressed OK!")
await page.waitForTimeout(5000);
})



test("Prompt Dialog alert  with Ok and cancel",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


page.on("dialog", async dialog=>{
    expect(dialog.type()).toContain("prompt")
    expect(dialog.message()).toContain("Please enter your name:")
    expect(dialog.defaultValue()).toContain("Harry Potter")
    await dialog.accept("John")
})
await page.locator("//button[normalize-space()='Prompt']").click()
await expect(await page.locator("//p[@id='demo']")).toHaveText("Hello John! How are you today?")
await page.waitForTimeout(5000);
})