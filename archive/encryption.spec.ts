import { test } from '../fixtures/hooks-fixture';
import { expect } from '@playwright/test';
import CommonUtils from '../utils/commonUtils';

/*
test.beforeEach('Before each Hook', async ({ loginPage }) => {
    await loginPage.navigate();
    console.log('This is a before each hook');
});

test.afterEach('After each Hook', async ({ userPage }) => {
    console.log('This is an after each hook');
    await userPage.logout();
}); 

test('encryption validation', async ({ page }) => {

  //console.log(process.env.BASE_URL);
  //console.log(process.env.USER_NAME);
  //console.log(process.env.PASSWORD);

const commonUtilsInstance = new CommonUtils();

const encryptedUserName = commonUtilsInstance.encryptData('Admin');
const encryptedPassword = commonUtilsInstance.encryptData('admin123');

console.log('Encrypted User Name:', encryptedUserName);
console.log('Encrypted Password:', encryptedPassword);

//commonUtilsInstance.decryptData(process.env.USER_NAME!);
//commonUtilsInstance.decryptData(process.env.PASSWORD!);

const decryptedUserName = commonUtilsInstance.decryptData(process.env.USER_NAME!);
const decryptedPassword = commonUtilsInstance.decryptData(process.env.PASSWORD!);

//await loginPage.navigate();
//await loginPage.login(decryptedUserName, decryptedPassword);
//console.log(await page.title());

}); */


test('Title validation', async ({ page, gotoUrl }) => {
  //await loginPage.navigate();
  //await expect(page).toHaveTitle('Swag Labs');
  //await page.goto(process.env.BASE_URL! + 'inventory.html');
  await expect(page).toHaveTitle('OrangeHRM');
  //expect(homePage.titleText).toHaveText('Products');
}); 

test('Cart validation', async ({ page, gotoUrl, logout }) => {
  //await loginPage.navigate();
  await expect(page).toHaveTitle('OrangeHRM');
  //await page.goto(process.env.BASE_URL! + 'inventory.html');
  //expect(homePage.titleText).toHaveText('Products');
}); 