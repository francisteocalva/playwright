class loginpage2{

    constructor(page){
        this.page = page
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signbutton = page.locator("#login");
    }


    async goTO(){
        await this.page.goto("https://rahulshettyacademy.com/client");
        //await this.page.waitForLoadState('networkidle');
    }

    async validsign(usename, password){
        await this.username.fill(usename);
        await this.password.fill(password);
        await this.signbutton.click();
        
    }

}
module.exports={loginpage2} 