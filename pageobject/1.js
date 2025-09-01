class one {


    constructor(page) {
        this.page = page;
        this.username = page.locator("#userEmail");
        this.password = page.locator("input[id='userPassword']");
        this.button = page.locator("input[value='Login']");
    }

    async goto(link) {
        await this.page.goto(link);
    }

    async fillup(name, pass) {
        await this.username.fill(name);
        await this.password.fill(pass);
        await this.button.click();
        await this.page.waitForLoadState('networkidle')
    }


}

module.exports = { one }