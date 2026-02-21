import {test , expect} from '@playwright/test'
import {NavigationPage} from '../tests/navigationpage.spec.ts'

test.beforeEach(async({page}) => {
    await page.goto("https://www.tutorialspoint.com/selenium/practice/text-box.php")

})

test('navigate to form page',async({page}) => {
    const navigationpage = new NavigationPage(page)
    navigationpage.formlayoutspage()
    navigationpage.formlayoutspage()
    navigationpage.radiobuttons()
    navigationpage.checkbox()
})