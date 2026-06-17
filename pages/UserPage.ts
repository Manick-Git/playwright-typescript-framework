import { Page, Locator } from '@playwright/test';

export class UserPage {
    // Define locators and methods for the UserPage here
    readonly page: Page;
    readonly userMenuButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userMenuButton = page.locator('.oxd-userdropdown-name'); // Example locator for user menu button
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
        // Initialize locators for UserPage elements here
    }

    async logout() {
        await this.userMenuButton.click();
        await this.logoutButton.click();
    }
}