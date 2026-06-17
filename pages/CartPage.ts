import {Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly backPackItemLink : Locator;

    constructor(page: Page) {
        this.page = page;
        this.backPackItemLink = page.locator('[data-test="item-4-title-link"]')
    }

    async gotoBackPackItem() {
        await this.backPackItemLink.click();
    }

}