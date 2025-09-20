const{loginReresh} = require('../pageobject/loginRefresh')

class pomRefresh{

    constructor(page){
        this.page = page
        this.logrefresh = new loginReresh(page);
    }

    async getLogin (url, username, password){
        await this.logrefresh.loginUrl(url);
        await this.logrefresh.inputs(username, password);
    }

}

module.exports={pomRefresh}