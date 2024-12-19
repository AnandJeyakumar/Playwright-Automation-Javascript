import {test,expect} from "@playwright/test"
import { waitForDebugger } from "inspector"


test ("LocatingMultipleElements",async({page})=>{


    await page.goto("https://www.demoblaze.com/index.html");

    await page.waitForSelector('a');
    
    const links = await page.$$('a');

    for (const i of links)
    {
        const linksss = await i.textContent();
        console.log(linksss);

    }
    // await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    //     // page.waitForSelector
    // const products = await page.$$("//*[@id='tbodyid']//div//h4/a");
    // console.log("The Lenght is " , products.length);
       
    // for (const i of products)
    // {
    //     console.log(await i.textContent());

    // }

})