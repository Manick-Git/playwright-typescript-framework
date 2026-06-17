import { Locator, Page } from "@playwright/test";

export class LeftNavigationPage{
    readonly page: Page;
    readonly pimlink: Locator;

    constructor(page: Page){
        this.page = page;
        this.pimlink = page.getByRole('link', { name: 'PIM' });
    }

async openPimModule(){
    await this.pimlink.click();
}

}