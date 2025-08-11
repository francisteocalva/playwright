const { loginpage3 } = require('./Loginpage3')
const { dashboard } = require('./Dashboard')
class pomanager {

    constructor(page) {
        this.page = page
        this.loginpage = new loginpage3(page);
        this.dashboard = new dashboard(page);
    }

    getLoginPage() {
        return this.loginpage;
    }

    getDashboard(){
        return this.dashboard;
    }

}

module.exports = {pomanager}