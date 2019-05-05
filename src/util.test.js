const filterByDate = require('./util');

describe('test filterByDate function', function () {

    test('Test filterByDate', () => {
        let jetpacks = [{id:1,image:"mock",name:"name_1"},
        {id:2,image:"mock",name:"name_2"}];

        let availabilities = [{jetpack_id:"1",start_date:"2019-05-04T20:57:29.947Z",end_date:"2020-05-04T20:57:29.947Z"}]

        expect(filterByDate(jetpacks,availabilities,"2016-05-04T20:57:29.947Z","2039-05-04T20:57:29.947Z")).toEqual([{id:1,image:"mock",name:"name_1"}]);
    });
});