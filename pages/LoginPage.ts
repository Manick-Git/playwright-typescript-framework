import {Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly username_textbox: Locator;
    readonly password_textbox: Locator;
    readonly login_button: Locator;
    readonly header: Locator;
    readonly InvalidCredentialsAlertMessage: Locator;

    constructor(page : Page) {
        this.page = page;
        this.username_textbox = page.getByRole('textbox', { name: 'Username' });
        this.password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_button = page.getByRole('button', { name: 'Login' });
        this.header = page.getByRole('heading', { name: 'Login' });
        this.InvalidCredentialsAlertMessage = page.getByRole('alert');
    }

async navigate() {  
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}

async login(username : string, password : string) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
}

}
