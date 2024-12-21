const {test,expect} = require ("@playwright/test");
const exp = require("constants");


test ("Home Page", async({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const pageTitle = page.title();
    console.log("The Page Title is ", pageTitle);

    await expect(page).toHaveTitle("OrangeHRM");

    const pageURL = page.url();
    console.log("The Page URL is ", pageURL);

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})

