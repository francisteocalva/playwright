class here {

    constructor(page){
        this.page = page;
        this.usernamef = page.locator("[name='q']");
        
    }

    async login(here){
        await this.usernamef.fill(here);
    }

    async screen(text){
        await this.page.goto(text)
    }


}

module.exports={here}