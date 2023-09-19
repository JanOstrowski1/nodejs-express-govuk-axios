const axios = require('axios');
axios.defaults.baseURL = process.env.API_URL;

module.exports.URL = '/hr/employee/'


module.exports.createEmployee = async function (employee) {
    
    try {
       const response = await axios.post(this.URL, employee)

       return response.data
    } catch (e) {
        if(e.response.status=='400'){
            throw new Error('Invalid data')
        }
        if(e.response.status=='500'){
            throw new Error('Could not create employee')
        }
        else{
            throw new Error('Failed to create employee')
        }
    }

}

module.exports.getEmployee = async function (id) {
        

        try {
            
            const response = await axios.get(this.URL + id)

            return response.data
        } catch (e) {
            if(id == null){
                throw new Error('Invalid ID')
            }
            if(e.response.status=='400'){
                throw new Error('Employee does not exist')
            }else{
                throw new Error('Failed to get employee')
            }
            
            
        }
        
}

module.exports.getEmployees = async function () {
    try {
        const response = await axios.get(this.URL)

        return response.data
    } catch (e) {
        console.log('Error: ' + e)
        throw new Error('Could not get employees')
    }
}