
import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly titleText: Locator;
    readonly header: Locator;
    readonly backPackAddToCartButton: Locator;
    readonly backPackRemoveButton: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleText = page.locator('[data-test="title"]');
        this.header = page.getByText('Swag Labs');
        this.backPackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.backPackRemoveButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    }

    async backPackAddToCart() {
        await this.backPackAddToCartButton.click();
    }

    async backPackRemove() {
        await this.backPackRemoveButton.click();
    }

    async gotoCart() {
        await  this.cartIcon.click();
    }
}