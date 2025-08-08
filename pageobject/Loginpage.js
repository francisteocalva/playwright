class LoginPage{

    constructor(page){

        this.page = page;
        this.signButton = page.locator("#login");
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
    }

    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validlogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.signButton.click();
    }

}

module.exports = {LoginPage}