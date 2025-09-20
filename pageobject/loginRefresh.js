class loginReresh{
    constructor(page){
        this.page = page;
        this.username = page.locator("#userEmail")
        this.password = page.locator("//input[@type='password']");
        this.button = page.locator("#login");
    }   


    async loginUrl(url){
        await this.page.goto(url)
    }

    async inputs(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.button.click();
    }
}
module.exports={loginReresh}