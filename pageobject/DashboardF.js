class dashboardF {

    constructor(page) {
        this.page = page;
        this.parentBody = page.locator('.card-body');
    }


    async clickButton() {
        const parentC = await this.parentBody.count();

        for (let i = 0; i < parentC; i++) {
            const reTval = await this.parentBody.locator("b").nth(i).textContent();
            if (reTval === 'ADIDAS ORIGINAL') {
                await this.parentBody.locator("text= Add To Cart").nth(i).click();
                break;
            }
        }
    }




}

module.exports ={dashboardF}