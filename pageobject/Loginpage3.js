class  loginpage3{

    constructor(page){
        this.page = page
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signbutton = page.locator("#login");
    }

    async url(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async login(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signbutton.click();
        await this.page.waitForLoadState('networkidle'); 
    }

}

module.exports = {loginpage3}