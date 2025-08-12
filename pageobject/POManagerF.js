const { loginpage } = require('../pageobject/LoginPageF')
const{dashboardF} = require('../pageobject/DashboardF')

class POManagerFs {

    constructor(page) {
        this.page = page
        this.loginpage = new loginpage(page) 
        this.dashboard = new dashboardF(page)
    }

getLogin(){
    return this.loginpage;
}

getDashboard(){
    return this.dashboard;
}


}

module.exports = {POManagerFs}