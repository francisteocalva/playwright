class loginpage {


constructor(page){
    this.page = page;
    this.username = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
    this.button = page.locator("#login");
}

async goTO(url){
    await this.page.goto(url);
}

async login(username, password){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.button.click();
    await this.page.waitForLoadState('networkidle');
}

}

module.exports = {loginpage}