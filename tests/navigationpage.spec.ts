import {Page} from '@playwright/test'

export class NavigationPage{
    readonly page : Page   
    constructor(page : Page){
        this.page = page
    }

    async formlayoutspage(){
        const formfill = this.page.locator('form').filter({hasText : 'Text Box'})
        await this.page.getByLabel('input').fill('test123@test.com')
        await this.page.getByLabel('Password').fill('Welcome123')
    }

    async radiobuttons(){
        await this.page.getByText(".list-group-item a").click()
        const radiobuttons = this.page.locator("form").filter({hasText : "Radio Button"})
        radiobuttons.getByLabel("Yes").click()
    }

    async checkbox(){
        const checkbox = this.page.locator("form").filter({hasText : "Radio Button"})
        await this.page.waitForTimeout(3000)
        checkbox.locator("#c_bs_1").click()

    }

    async 

    private async selectgroupItem(groupItemtitle : string){
        const groupmenuitem = this.page.getByTitle(groupItemtitle)
        const expandedState = await groupmenuitem.getAttribute('area-expanded')
        if(expandedState == 'false'){
            await groupmenuitem.click()
        }
    }
}