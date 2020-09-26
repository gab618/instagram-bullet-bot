const puppeteer = require("puppeteer");

async function init() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--window-size=1920,1080"],
    });

    const page = await browser.newPage();
    await page.goto("https://www.instagram.com/");

    await page.waitForFunction(() => document.querySelectorAll("input").length);

    // Login
    await page.type("[name=username]", "bilbo4x", { delay: 100 });
    await page.type("[name=password]", "pass", { delay: 100 });
    await page.evaluate(() => {
        document.querySelector(".L3NKy").click();
    });
}

init();
