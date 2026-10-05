// 이력서 HTML → PDF (Playwright Chromium). 실행: node resume/render_pdf.mjs
// 환경변수 CHROME_PATH 로 Chromium 실행 파일을 지정할 수 있다.
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const jobs = [
  ["resume-short.html", "resume-yerin-min.pdf"],
  ["resume-full.html", "resume-yerin-min-full.pdf"],
];
const launch = {};
if (process.env.CHROME_PATH) launch.executablePath = process.env.CHROME_PATH;
const browser = await chromium.launch(launch);
try {
  for (const [src, out] of jobs) {
    const page = await browser.newPage();
    await page.goto("file://" + path.join(here, src), { waitUntil: "load" });
    await page.emulateMedia({ media: "print" });
    await page.pdf({ path: path.join(here, out), format: "A4", printBackground: true, preferCSSPageSize: true });
    await page.close();
    console.log("wrote", out);
  }
} finally {
  await browser.close();
}
