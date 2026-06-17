import {test as baseTest} from "../fixtures/pom-fixture";
import commonUtils from "../utils/commonUtils";


type CommonFixturesType = {

    commonUtils: commonUtils; // Replace 'any' with the actual type of commonUtils if available
    // Define any common fixtures here if needed
};

export const test = baseTest.extend<CommonFixturesType>({

commonUtils: async ({}, use) => {
    use(new commonUtils());  
}

})