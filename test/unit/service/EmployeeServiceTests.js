var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');
const expect = chai.expect;
const EmployeeService = require('../../../app/service/EmployeeService');
const employee = {
  salary: "30000",
  fname: "Mocha",
  lname: "Chai",
  email: "test@email.com",
  address: "address",
  address2: "address2",
  city: "city",
  county: "county",
  postalCode: "postalCode",
  country: "country",
  phoneNo: "01234567890",
  bankNo: "12345678",
  nin: "nin"
}

describe('EmployeeService', function () {
  describe('getEmployees', function () {
    it('should return employees from response', async () => {
      var mock = new MockAdapter(axios);

      const data = [employee];

      mock.onGet(EmployeeService.URL).reply(200, data);

      var results = await EmployeeService.getEmployees();

      expect(results[0]).to.deep.equal(employee)
    })

    it('should throw exception when 500 error returned from axios', async () => {
      var mock = new MockAdapter(axios);

      mock.onGet(EmployeeService.URL).reply(500);

      var error;

      try {
        await EmployeeService.getEmployees()
      } catch (e) {
        var error = e.message
      }

      expect(error).to.equal('Could not get employees')
    })
  })
  /*
  Mocking Exercise 1

  Write a unit test for the getEmployee method

  When axios returns with a 500 error

  Expect a "Failed to get employee" error to be returned

  This should fail, make code changes to make this test pass
   */
  describe('getEmployee', function () {
    it('should throw a "Failed to get employee" error when axios returns 500', async () => {
      var mock = new MockAdapter(axios)

      mock.onGet(EmployeeService.URL + 1).reply(500);

      var error;

      try {
        await EmployeeService.getEmployee(1)
      } catch (e) {
        var error = e.message
      }

      expect(error).to.equal('Failed to get employee')
    })


    /*
    Mocking Exercise 2

    Write a unit test for the getEmployee method

    When axios returns an employee

    Expect the employee to be returned

    This should pass without code changes
     */
    it('should return an employee from response', async () => {
      var mock = new MockAdapter(axios)

      mock.onGet(EmployeeService.URL + 1).reply(200, employee)

      var result = await EmployeeService.getEmployee(1)

      expect(result).to.deep.equal(employee);
      expect(JSON.stringify(result)).to.equal(JSON.stringify(employee));
    })



    /*
    Mocking Exercise 3

    Write a unit test for the getEmployee method

    When the id parameter is null

    Expect a "Invalid ID" error should be returned and axios not invoked

    This should fail, make code changes to make this test pass
     */

    it('should expect a "Invalid ID" error when id parameter is null', async () => {
      var mock = new MockAdapter(axios)

      mock.onGet(EmployeeService.URL + null).reply(400)

      try {
        await EmployeeService.getEmployee(null)

      } catch (e) {
        var error = e.message
      }

      expect(error).to.equal('Invalid ID')
    })


    /*
    Mocking Exercise 4

    Write a unit test for the getEmployee method

    When axios returns with a 400 error

    Expect a "Employee does not exist" error to be returned

    This should fail, make code changes to make this test pass
     */

    it('should expect a "Employee does not exist" error when axios returns 400 error', async () => {
      var mock = new MockAdapter(axios)

      mock.onGet(EmployeeService.URL + 1).reply(400)

      try {
        await EmployeeService.getEmployee(1)

      } catch (e) {
        var error = e.message
      }

      expect(error).to.equal('Employee does not exist')
    })
  })

  /*
  Mocking Exercise 5

  Write a unit test for the createEmployee method

  When the axios returns an id

  Expect the id to be returned

  This should pass without code changes
   */
  describe('createEmployee', function () {

    it('should return an id when axios returns an id', async () => {
      var mock = new MockAdapter(axios)

      mock.onPost(EmployeeService.URL, employee).reply(200, 1)

      var result = await EmployeeService.createEmployee(employee)

      expect(result).to.equal(1)
    })

    /*
    Mocking Exercise 6

    Write a unit test for the createEmployee method

    When axios returns with a 400 error

    Expect a "Invalid data" error to be returned

    This should fail, make code changes to make this test pass
     */
    it('should expect a "Invalid data" exception when axios returns 400 error', async () => {
      var mock = new MockAdapter(axios)

      mock.onPost(EmployeeService.URL, employee).reply(400)

      try {
        await EmployeeService.createEmployee(employee)
      } catch (e) {
        var error = e.message
      }

      expect(error).to.equal('Invalid data')
    })


    /*
   Mocking Exercise 7

   Write a unit test for the createEmployee method

   When axios returns with a 500 error

   Expect a "Could not create employee" error to be returned

   This should fail, make code changes to make this test pass
    */
    it('should expect a "Could not create employee" exception when axios returns 500 error', async () => {
      var mock = new MockAdapter(axios)

      mock.onPost(EmployeeService.URL, employee).reply(500)

      try {
        await EmployeeService.createEmployee(employee)
      } catch (e) {
        var error = e.message
      }

      expect(error).to.equal('Could not create employee')
    })

  })
})