const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  const selector = 'div#root:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)';
  
  try {
    const el = await page.$(selector);
    if (el) {
      const className = await page.evaluate(el => el.className, el);
      const innerHTML = await page.evaluate(el => el.innerHTML, el);
      const textContent = await page.evaluate(el => el.textContent, el);
      console.log("Found element!");
      console.log("className:", className);
      console.log("textContent:", textContent.substring(0, 100));
    } else {
      console.log("Element not found.");
      // let's print the structure to help
      const html = await page.evaluate(() => document.body.innerHTML);
      require('fs').writeFileSync('dom.html', html);
    }
  } catch (e) {
    console.error(e);
  }
  await browser.close();
})();
