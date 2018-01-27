import puppeteer from 'puppeteer'
import { userInfo } from 'os'

export default async function commitScraper(username) {
  let commitData = {}
  const currentYear = new Date().getFullYear()

  // const browser = await puppeteer.launch({ headless: false })
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const response = await page.goto(`https://github.com/${username}`)

  if (response.headers().status === '404 Not Found') {
    await browser.close()
    return false
  }

  //get our possible years of contribution
  let contributionYears = await page.$$('.profile-timeline-year-list li a')

  let years = [...Array(contributionYears.length).keys()]
  //read the graph and extract its data

  for (let year of years) {
    let workingYear = currentYear - year
    await page.goto(
      `https://github.com/users/${username}/contributions?to=${workingYear}-01-01`
    )
    let data = await page.evaluate(() =>
      [...document.querySelectorAll('rect.day')].map(day => ({
        count: day.dataset.count,
        date: day.dataset.date
      }))
    )
    data.forEach(day => {
      const key = day.date.split('-').join('')
      commitData[key] = {
        githubCount: +day.count,
        hackCount: 0
      }
    })
  }
  await browser.close()

  return commitData
}
