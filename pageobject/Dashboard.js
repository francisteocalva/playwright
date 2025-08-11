class dashboard {

    constructor(page) {
        this.page = page;
        this.parenloc = page.locator('.card-body');

    }

    async search(value) {

        const parentC = await this.parenloc.count();
        for (let i = 0; i < parentC; i++) {
            const reTval = await this.parenloc.locator("b").nth(i).textContent();
            if (reTval === value) {
                await this.parenloc.locator("text= Add To Cart").nth(i).click();
                break;
            }
        }

    }


}

module.exports = {dashboard}