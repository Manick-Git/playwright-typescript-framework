import { Locator, Page } from "@playwright/test";

export class PimPage{
    readonly page:Page;
    readonly addPimButton: Locator;
    readonly firstNameTextBox: Locator;
    readonly middleNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly saveButton: Locator;
    readonly newEmployeeNameHeading: Locator;

    constructor(page: Page){
        this.page = page;
        this.addPimButton = page.getByRole('button', { name: ' Add' });
        this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name' });
        this.middleNameTextBox = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.newEmployeeNameHeading = page.locator('.orangehrm-edit-employee-name');
    }

    /* Add New Employee in PIM Module

    */

    async addEmployee(firstname: string, middlename:string, lastname:string){
        await this.addPimButton.click();
        await this.firstNameTextBox.fill(firstname);
        await this.middleNameTextBox.fill(middlename);
        await this.lastNameTextBox.fill(lastname);
        await this.saveButton.click();
    }

}