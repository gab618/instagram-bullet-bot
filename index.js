const puppeteer = require("puppeteer");
const credentials = require("./credentials");

async function init() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--window-size=1920,1080"],
    });

    const page = await browser.newPage();
    page.setViewport({ width: 1500, height: 764 });
    await page.goto("https://www.instagram.com/");

    await page.waitForFunction(() => document.querySelectorAll("input").length);

    // Login
    await page.type("[name=username]", credentials.user, { delay: 100 });
    await page.type("[name=password]", credentials.pass, { delay: 100 });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("button[type='submit']"),
    ]);

    // Search drezinhozsz
    await page.type("input[placeholder='Search']", "drezinhozsz");
    await page.waitForSelector(".drKGC .fuqBx a", { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click(".drKGC .fuqBx a"),
    ]);
    await page.waitForSelector(".eLAPa", { visible: true });
    await page.click(".eLAPa");

    while (true) {
        await page.waitForSelector(".Ypffh", { visible: true });
        await page.type(".Ypffh", "🔥 BULLET 🔥", { delay: 750 });
        await page.type(".Ypffh", String.fromCharCode(13), { delay: 3000 });
        await page.click(".coreSpriteRightPaginationArrow");
    }
    //.coreSpriteRightPaginationArrow
}

init();
