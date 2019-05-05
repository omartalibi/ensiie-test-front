const JetpackApi = require('./JetpackApi');
const Jetpack = require('../../Entity/Jetpack');
describe('JetpackApi  get Jetpacks', function () {

    test('Test GetJetpacks', () => {
        let httpClientMock = {
            fetch: jest.fn()
        };

        httpClientMock.fetch.mockResolvedValue([
            {
                id: "123",
                name: "The Jetpack",
                image: "base64 ..."
            }
        ]);

        let jetpackApi = new JetpackApi(httpClientMock);
        jetpackApi.getJetpacks().then(resp => {
            expect(Array.isArray(resp)).toBe(true);
            expect(resp.length).toBe(1);
            expect(resp[0]).toBeInstanceOf(Jetpack)
        });
    });
});

      
describe('JetpackApi  get Availabilites', function () {

    test('Test getAvailabiliteis', () => {
        let httpClientMock = {
            fetch: jest.fn()
        };

        httpClientMock.fetch.mockResolvedValue([
            {

                jetpack_id: "123",
                start_date: "startdate",
                end_date: "enddate"
               }
        ]);
        let jetpackApi = new JetpackApi(httpClientMock);

        jetpackApi.getAvailabilities().then(resp => {
            expect(Array.isArray(resp)).toBe(true);
            expect(resp.length).toBe(1);
            /* try to find more tests*/
        });
    });
});
    


describe('JetpackApi  post Bookings', function () {

    test('Test postBookings', () => {
        let httpClientMock = {
            fetch: jest.fn()
        };

        httpClientMock.fetch.mockResolvedValue([
            {
                jetpack_id: "123",
                start_date: "startdate",
                end_date: "enddate"
            }
        ]);

        let jetpackApi = new JetpackApi(httpClientMock);
        jetpackApi.postBookings().then(resp => {
            expect(Array.isArray(resp)).toBe(true);
            expect(resp.length).toBe(1);
            /* try to find more tests*/
        });
    });
});

  describe('JetpackApi  post Jetpacks', function () {

    test('Test postJetpack', () => {
        let httpClientMock = {
            fetch: jest.fn()
        };
        let jetpackApi = new JetpackApi(httpClientMock);

        
         httpClientMock.fetch.mockResolvedValue([
            {
                jetpack_id: "123",
                start_date: "startdate",
                end_date: "enddate"
            }
        ]);
        jetpackApi.postJetpack().then(resp => {
            expect(Array.isArray(resp)).toBe(true);
            expect(resp.length).toBe(1);
            expect(resp[0]).toBeInstanceOf(Jetpack)
        });
    });
});

