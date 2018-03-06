
const utils = require('./utils');
const expect = require('expect');

it('should add 2 numbers' , () => {
    var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
});

it('should square a number' , () => {
   var res = utils.square(5);
   expect(res).toBe(25).toBeA('number');
});

it('shoyld expect some values', () => {
   expect(12).toNotBe(14);
});

it('2 objects are same', () => {
   expect({name:'Giri'}).toEqual({name:'Giri'});
});

it('2 objects are NOT same', () => {
   expect({name:'Giri'}).toNotEqual({name:'Suppi'});
});

it('should have some values', () => {
   expect([2,3,4]).toInclude(2);
});


it('should NOT have some values', () => {
   expect([2,3,4]).toExclude(5);
});

it('should verify if first and last names are set', () => {
    var user = {location: 'Bangalore', age: 35};
    var res = utils.setName(user, 'Giridhar Bhujanga');

    expect(user).toInclude({
        firstName:'Giridhar',
        lastName: 'Bhujanga'
    });

});