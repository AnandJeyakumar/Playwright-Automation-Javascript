import {test,expect} from "@playwright/test"

test("Table",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable")
    const rows=await table.locator("tbody tr")
    console.log("The Row count is ", await rows.count())
    const columns =await table.locator("thead tr th")
    console.log("The Column count is ", await columns.count())
    // const  matchedRow =  rows.filter({
    //         has: page.locator("td"),
    //         hasText: "Product 3"
    // })
    // await matchedRow.locator("input").check()
    // Selecting multiple product
    // await selectingProduct(rows,page,"Product 1")
    // await selectingProduct(rows,page,"Product 5")
    // await selectingProduct(rows,page,"Product 3")

    // await page.waitForTimeout(5000);

    // async function selectingProduct(rows,page,pname){

    //     const matchedRow=rows.filter({

    //         has: page.locator("td"),
    //         hasText: pname
    //     })
    //      await matchedRow.locator("input").check() 

    // }
    // Printing all products

    // for (let i=0;i<await rows.count();i++)
    // {
    //     const row = rows.nth(i)
    //     const tds= row.locator("td")

    //     for (let y=0;y< await tds.count()-1;y++)
    //     {
    //         console.log(await tds.nth(y).textContent())
    //     }

    // }

    const pages=await page.locator("#pagination li a")
    console.log("Totla num of pages is ", await pages.count())

    for (let p=0;p< await pages.count();p++)
    {
        if (p>0);
        {
            await pages.nth(p).click()
            console.log(p)
        }  
        // await page.waitForTimeout(5000);
        for (let i=0;i<await rows.count();i++)
    {
        const row = rows.nth(i)
        const tds= row.locator("td")

        for (let y=0;y< await tds.count()-1;y++)
        {
            console.log(await tds.nth(y).textContent())
        }
    }
    }

    // await page.waitForTimeout(5000);
})



