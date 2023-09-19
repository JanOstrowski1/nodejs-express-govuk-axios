module.exports.validateEmployee = function (employee) {
    if (isNaN(employee.salary)) {
        return "Salary must be a number"
    }

    if (Number(employee.salary) < 20000) {
        return "Salary must be at least £20,000"
    }

    if (employee.bankNo.length != 8) {
        return "Invalid bank number"
    }

    if (employee.fname.length > 50) {
        return "First name is must me shorter than 50 characters"
    }

    if (employee.lname.length > 50) {
        return "Last name is must me shorter than 50 characters"
    }

    if (employee.nin.length != 8) {
        return "Nin is needs to be 8 characters long"
    }

    return null
}