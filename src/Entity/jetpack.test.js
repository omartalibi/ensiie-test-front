const Jetpack = require('./Jetpack');
describe('Jetpack toJson', function () {


    test('Test object creation (constructor)', () => {
        let jetpack = new Jetpack();
        expect(jetpack.id).toBe(null);
        expect(jetpack.name).toBe(null);
        expect(jetpack.image).toBe(null);
    });
});