import {test, expect} from '../fixtures/hooks-fixture';
import loginMuduleData from '../data/login-module-data.json' with { type : 'json'};

test.use({
    storageState:{
    cookies:[],
    origins:[],
    }
})

test('Login with Invalid password', {
  tag: ['@UI','@UAT'],
  annotation:{
    type: 'Test Case Link',
    description: 'https://dev.azure.com/'
  }}, async ({ gotoUrl, commonUtils, loginPage }) => {
  const username = commonUtils.decryptData(process.env.USER_NAME!);
  await loginPage.login(username, loginMuduleData.wrong_password);
  await expect(loginPage.InvalidCredentialsAlertMessage).toHaveText(loginMuduleData.invalid_credentials_text);
  await expect(loginPage.username_textbox).toBeVisible();
});

test('Login with Invalid user name', {tag: ['@UI','@UAT'],
    annotation:{
    type: 'Test Case Link',
    description: 'https://dev.azure.com/'
  }}, async ({ gotoUrl, commonUtils, loginPage }) => {
  const password = commonUtils.decryptData(process.env.PASSWORD!);
  await loginPage.login(loginMuduleData.wrong_username, password);
  await expect(loginPage.InvalidCredentialsAlertMessage).toHaveText('Invalid credentials');
  await expect(loginPage.username_textbox).toBeVisible();
});

test('Login with Invalid user name and invalid password', {
  tag: ['@UI','@DEV'],
    annotation:{
    type: 'Test Case Link',
    description: 'https://dev.azure.com/'
  }}, async ({ gotoUrl, commonUtils, loginPage }) => {
  await loginPage.login(loginMuduleData.wrong_username, loginMuduleData.wrong_password);
  await expect(loginPage.InvalidCredentialsAlertMessage).toHaveText('Invalid credentials');
  await expect(loginPage.username_textbox).toBeVisible();
});