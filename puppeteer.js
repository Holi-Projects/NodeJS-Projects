const puppeteer = require("puppeteer");
const url = "https://bing.com/";

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    console.log(url)

    const result = await page.evaluate(() => {
        return document.querySelector("h1").innerText;
    });

    console.log(result);
}

run();