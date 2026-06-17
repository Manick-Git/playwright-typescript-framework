import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { UserPage } from '../pages/UserPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LeftNavigationPage } from '../pages/LeftNavigationPage';
import { PimPage } from '../pages/PimPage';

type POMFixturesType = {
    loginPage: LoginPage;
    homePage: HomePage;
    cartPage: CartPage;
    userPage: UserPage;
    dashboardPage: DashboardPage;
    leftNavigationPage: LeftNavigationPage;
    pimPage: PimPage;
};

export const test = baseTest.extend<POMFixturesType>({
    // Define any fixtures here if needed
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    userPage: async ({ page }, use) => {
        const userPage = new UserPage(page);
        await use(userPage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    leftNavigationPage: async({ page}, use) => {
        const leftNavigationPage = new LeftNavigationPage(page);
        await use(leftNavigationPage);
    },
    pimPage: async({ page }, use) => {
        const pimPage = new PimPage(page);
        await use(pimPage);
    }
});
 