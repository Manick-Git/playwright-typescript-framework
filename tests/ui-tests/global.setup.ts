import {test} from '../../fixtures/common-fixture';
import {expect} from '@playwright/test';

test('global setup for Auto Login', async ({ page, loginPage, dashboardPage, commonUtils }) => {
    console.log('This is a global setup test');

    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
    // You can perform any global setup tasks here, such as initializing databases, setting environment variables, etc.
    // For example, you can use commonUtils to perform some setup operations if needed.
    // await commonUtils.someSetupFunction();

    await loginPage.navigate();
    await loginPage.login(decryptedUserName, decryptedPassword);
    //await page.waitForURL(process.env.BASE_URL! + 'web/index.php/dashboard/index');
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(dashboardPage.dashboardHeading).toHaveText('Dashboard');
    await page.context().storageState({ 
        path: './playwright/.auth/auth.json' 
    });
});
