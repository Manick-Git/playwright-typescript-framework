import { test as baseTest } from './common-fixture';

type HooksFixturesType = {
    gotoUrl: any;    
    logout: any;
};

export const test = baseTest.extend<HooksFixturesType>({
    gotoUrl: async ({ loginPage } : { loginPage: any }, use : any) => {
        await loginPage.navigate();
        await use();
    },

    logout: async ({ userPage } : { userPage: any }, use : any) => {      
    await use();
    await userPage.logout();
    }

});

export { expect } from '@playwright/test';

