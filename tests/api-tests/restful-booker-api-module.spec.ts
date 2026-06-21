import {test, expect} from '../../fixtures/hooks-fixture';
import apiPathData from '../../data/api-data/api-path-data.json' with { type : 'json'};
import restfulAPIData from '../../data/api-data/restful-booker-api-module-data.json' with { type : 'json'};

/*
test("API testing", async({request}) =>{
    const bookingIds = await request.get('booking');
    console.log(await bookingIds.json());
});

test("API test 2", async({request}) =>{
    const bookingDetails = await request.get('booking/1');
    console.log(await bookingDetails.json());
}); */

test("Fetch all the booking Ids",{
    tag:['@API','@DEV'],
    annotation:{
        type: 'Testcaselink',
        description: 'https://dev.azure.com/'
    }
},  
    async({request}) =>{
    const bookingIdsResp = await request.get(apiPathData.booking_path);
    const bookingIdsJsonResp = await bookingIdsResp.json();
    console.log(bookingIdsJsonResp);
    expect(bookingIdsResp.status()).toBe(200);
    expect(bookingIdsResp.statusText()).toBe('OK');
    expect(bookingIdsJsonResp).not.toBeNull();
    expect(bookingIdsResp.headers()['content-type']).toBe(restfulAPIData['content-type']); 
});

test("get booking details",{
    tag:['@API','@DEV'],
    annotation:{
        type: 'Testcaselink',
        description: 'https://dev.azure.com/'
    }
},  
    async({request}) =>{
    const bookingDetailsResp = await request.get(`${apiPathData.booking_path}/${restfulAPIData['booking-id']}`);
    const bookingDetailsJsonResp = await bookingDetailsResp.json();
    console.log(bookingDetailsJsonResp);
    expect(bookingDetailsResp.status()).toBe(200);
    expect(bookingDetailsResp.statusText()).toBe('OK');
    expect(bookingDetailsJsonResp.firstname).toEqual(restfulAPIData.firstname);
});


test("create new booking",{
    tag:['@API','@DEV'],
    annotation:{
        type: 'Testcaselink',
        description: 'https://dev.azure.com/'
    }
},  
    async({request}) =>{
    const createBookingResp = await request.post(apiPathData.booking_path,{    
        data: restfulAPIData['create-booking']    
    });
    const createBookingJasonResp = await createBookingResp.json();
    console.log(createBookingJasonResp);
    expect(createBookingResp.status()).toBe(200);
    expect(createBookingJasonResp.booking).toMatchObject(restfulAPIData['create-booking']);
});

/*
test("update booking",{
    tag:['@API','@DEV'],
    annotation:{
        type: 'Testcaselink',
        description: 'https://dev.azure.com/'
    }
},  
    async({request}) =>{
    const updateBookingResp = await request.put(`${apiPathData.booking_path}/${restfulAPIData['booking-id-update']}`,{data:restfulAPIData.update_booking});
    console.log(updateBookingResp);
    const updateBookingRespJson = await updateBookingResp.json();
    console.log(updateBookingRespJson);
    expect(updateBookingResp.status()).toBe(200);
    expect(updateBookingRespJson).toMatchObject(restfulAPIData.update_booking);
});

*/

test("update booking2",{
    tag:['@API','@DEV'],
    annotation:{
        type: 'Testcaselink',
        description: 'https://dev.azure.com/'
    }
},  
    async({request, commonApiUtils}) =>{
    const tokenValue = await commonApiUtils.createToken();
    const updateBookingResp = await request.put(`${apiPathData.booking_path}/${restfulAPIData['booking-id-update']}`, {   
        headers:{
            Cookie:`token=${tokenValue}`
    },
    data:restfulAPIData.update_booking
});
    console.log(updateBookingResp);
    const updateBookingRespJson = await updateBookingResp.json();
    console.log(updateBookingRespJson);
    expect(updateBookingResp.status()).toBe(200);
    expect(updateBookingRespJson).toMatchObject(restfulAPIData.update_booking);
});



test("Patch update booking",{
    tag:['@API','@DEV'],
    annotation:{
        type: 'Testcaselink',
        description: 'https://dev.azure.com/'
    }
},  
    async({request, commonApiUtils}) =>{
    const tokenValue2 = await commonApiUtils.createToken();
    const partialUpdateBookingResp = await request.patch(`${apiPathData.booking_path}/${restfulAPIData['booking-id-update']}`,{
        headers: {
            Cookie:`token=${tokenValue2}`
        },
        data: restfulAPIData.update_partial_booking
    });
    const partialUpdateBookingRespJson = await partialUpdateBookingResp.json();
    expect(partialUpdateBookingResp.status()).toBe(200);
    expect(partialUpdateBookingRespJson.firstname).toMatch(restfulAPIData.update_partial_booking.firstname);
    expect(partialUpdateBookingRespJson.lastname).toMatch(restfulAPIData.update_partial_booking.lastname);
    }); 


    test("Delet booking",{
    tag:['@API','@DEV'],
    annotation:{
        type: 'Testcaselink',
        description: 'https://dev.azure.com/'
    }
},  
    async({request, commonApiUtils}) =>{
    const tokenValue3 = await commonApiUtils.createToken();
    const deleteBookingResp = await request.delete(`${apiPathData.booking_path}/${restfulAPIData['booking-id-delete']}`,{
        headers: {
            Cookie:`token=${tokenValue3}`
        },
    });
    //const deleteBookingRespJson = await deleteBookingResp.json();
    expect(deleteBookingResp.status()).toBe(201);
    expect(deleteBookingResp.statusText()).toBe("Created");

    const getBookingResp = await request.get(`${apiPathData.booking_path}/${restfulAPIData['booking-id-delete']}`)
    expect(getBookingResp.status()).toBe(404);
    expect(getBookingResp.statusText()).toBe("Not Found")
    }); 
    