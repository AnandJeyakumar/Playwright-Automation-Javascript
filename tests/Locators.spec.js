import {test,expect} from '@playwright/test'


test ("Locators", async({page}) =>{


    await page.goto("https://www.demoblaze.com/index.html");
    
    //Locating by Property
    // await page.locator("id=login2").click();
    await page.click("id=login2");


    // Locating by CSS - Username
    await page.locator("#loginusername").fill("pavanol");

    // Locating by 
    // await page.locator("# #loginpassword").fill("Java Script");
    await page.fill(" #loginpassword", "test@123");

    // Locating Login Button
    await page.click("[onclick='logIn()']");

    // Locating Log out Buttom
    const logOutLink = await page.locator("//*[@id='logout2']");

    await expect(logOutLink).toBeVisible();

    await page.close();

})