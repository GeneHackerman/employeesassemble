// using Manager constructor
const Manager = require('../lib/Manager');

// creating Manager object
test('creates a Manager object', () => {
    const manager = new Manager('Frank', 30, 'frank.morillo@gmail.com', 69);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Frank', 30, 'frank.morillo@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});