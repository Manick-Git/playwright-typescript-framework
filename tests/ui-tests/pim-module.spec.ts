import {test, expect} from '../../fixtures/hooks-fixture';
import { LeftNavigationPage } from '../../pages/LeftNavigationPage';
import pimData from '../../data/ui-data/pim-module-data.json' with { type : 'json'};

test('add employee in PIM', {tag: ['@UI','@UAT'],
      annotation:{
    type: 'Test Case Link',
    description: 'https://dev.azure.com/'
  }}, async( { gotoUrl, leftNavigationPage, pimPage}) => {

    await test.step("Open PIM Module", async() =>{
        await leftNavigationPage.openPimModule();
    })

    await test.step("Add Employee in PIM module", async() =>{
        await pimPage.addEmployee(pimData.first_name,pimData.middle_name,pimData.last_name);
        await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimData.first_name} ${pimData.last_name}`);
    })
});