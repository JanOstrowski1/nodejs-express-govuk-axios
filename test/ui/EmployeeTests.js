/* eslint-env mocha */
/* global browser */
const webdriver = require('selenium-webdriver');

const chai = require('chai');  

describe('Employee test', async () => {


    it('Create new employee', async () => {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        await driver.get(process.env.UI_TEST_URL);

        await driver.findElement(webdriver.By.id('add-employee-button')).click();

        await driver.findElement(webdriver.By.id('fname')).sendKeys('UI');
        await driver.findElement(webdriver.By.id('lname')).sendKeys('Tests');
        await driver.findElement(webdriver.By.id('email')).sendKeys('testemail@email.com');
        await driver.findElement(webdriver.By.id('address')).sendKeys('1 Home Street');
        await driver.findElement(webdriver.By.id('address2')).sendKeys('Home Lane');
        await driver.findElement(webdriver.By.id('city')).sendKeys('Belfast');
        await driver.findElement(webdriver.By.id('county')).sendKeys('Antrim');
        await driver.findElement(webdriver.By.id('postalCode')).sendKeys('BT9');
        await driver.findElement(webdriver.By.id('country')).sendKeys('Norn Iron');
        await driver.findElement(webdriver.By.id('phoneNo')).sendKeys('01234567890');
        await driver.findElement(webdriver.By.id('bankNo')).sendKeys('12345678');
        await driver.findElement(webdriver.By.id('nin')).sendKeys('AA1A11AA');
        await driver.findElement(webdriver.By.id('salary')).sendKeys('30000');
        await driver.findElement(webdriver.By.id('submit')).click('#submit');
   
        await driver.findElement(webdriver.By.id('name')).getText().then(function(value) {
            chai.assert.equal(value, 'UI Tests');
        });

        await driver.quit();
    });
    /*
    UI Test Exercise 1

    Write an UI test for the add employee flow

    Try to create an employee with a salary of £10,000

    Expect 'Salary must be at least £20,000' error to be displayed

    This should pass without code changes
    */

    it('Create new employee with Salary that is too low', async () => {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        await driver.get(process.env.UI_TEST_URL);

        await driver.findElement(webdriver.By.id('add-employee-button')).click();

        await driver.findElement(webdriver.By.id('fname')).sendKeys('UI');
        await driver.findElement(webdriver.By.id('lname')).sendKeys('Tests');
        await driver.findElement(webdriver.By.id('email')).sendKeys('testemail@email.com');
        await driver.findElement(webdriver.By.id('address')).sendKeys('1 Home Street');
        await driver.findElement(webdriver.By.id('address2')).sendKeys('Home Lane');
        await driver.findElement(webdriver.By.id('city')).sendKeys('Belfast');
        await driver.findElement(webdriver.By.id('county')).sendKeys('Antrim');
        await driver.findElement(webdriver.By.id('postalCode')).sendKeys('BT9');
        await driver.findElement(webdriver.By.id('country')).sendKeys('Norn Iron');
        await driver.findElement(webdriver.By.id('phoneNo')).sendKeys('01234567890');
        await driver.findElement(webdriver.By.id('bankNo')).sendKeys('12345678');
        await driver.findElement(webdriver.By.id('nin')).sendKeys('AA1A11AA');
        await driver.findElement(webdriver.By.id('salary')).sendKeys('10000');
        await driver.findElement(webdriver.By.id('submit')).click('#submit');
   
        await driver.findElement(webdriver.By.id('create-employee-error')).getText().then(function(value) {
            chai.assert.equal(value, 'Salary must be at least £20,000');
        });

        await driver.quit();
    });

    /*
    UI Test Exercise 2

    Write an UI test for the add employee flow

    Try to create an employee with a salary of ABC

    Expect 'Salary must be a number' error to be displayed

    This should pass without code changes
    */

    it('Create new employee with Salary with a salary of ABC', async () => {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        await driver.get(process.env.UI_TEST_URL);

        await driver.findElement(webdriver.By.id('add-employee-button')).click();

        await driver.findElement(webdriver.By.id('fname')).sendKeys('UI');
        await driver.findElement(webdriver.By.id('lname')).sendKeys('Tests');
        await driver.findElement(webdriver.By.id('email')).sendKeys('testemail@email.com');
        await driver.findElement(webdriver.By.id('address')).sendKeys('1 Home Street');
        await driver.findElement(webdriver.By.id('address2')).sendKeys('Home Lane');
        await driver.findElement(webdriver.By.id('city')).sendKeys('Belfast');
        await driver.findElement(webdriver.By.id('county')).sendKeys('Antrim');
        await driver.findElement(webdriver.By.id('postalCode')).sendKeys('BT9');
        await driver.findElement(webdriver.By.id('country')).sendKeys('Norn Iron');
        await driver.findElement(webdriver.By.id('phoneNo')).sendKeys('01234567890');
        await driver.findElement(webdriver.By.id('bankNo')).sendKeys('12345678');
        await driver.findElement(webdriver.By.id('nin')).sendKeys('AA1A11AA');
        await driver.findElement(webdriver.By.id('salary')).sendKeys('AaaaAAaa');
        await driver.findElement(webdriver.By.id('submit')).click('#submit');
   
        await driver.findElement(webdriver.By.id('create-employee-error')).getText().then(function(value) {
            chai.assert.equal(value, 'Salary must be a number');
        });

        await driver.quit();
    });

    /*
    UI Test Exercise 3

    Write an UI test for view employee workflow

    Navigate from the homepage to the employee list

    Select view on an employee

    Expect the name on the view employee page to match the name from the link you've clicked
    */
    it('Select view on an employee', async () => {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        await driver.get(process.env.UI_TEST_URL);

        await driver.findElement(webdriver.By.id('view-employees-button')).click();
        var Forename = await driver.findElement(webdriver.By.xpath('/html/body/div/main/table/tbody/tr[1]/td[1]')).getText();

        await driver.findElement(webdriver.By.id('view_employee_0')).click();
       
        await driver.findElement(webdriver.By.xpath('/html/body/div/main/table/tbody/tr/td[1]')).getText().then(function(value) {
            chai.assert.equal(value, Forename);
        });

        await driver.quit();
    });


    /*
    UI Test Exercise 4

    Write an UI test for view employee workflow

    Navigate directly to the view employee page with an invalid ID

    Expect 'Employee does not exist' error to be displayed
    */

    it('Select view on an employee', async () => {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        await driver.get(process.env.UI_TEST_URL+'/employees/999999');
       
        await driver.findElement(webdriver.By.id('error-message')).getText().then(function(value) {
            chai.assert.equal(value, 'Employee does not exist');
        });

        await driver.quit();
    });



  })