const { Builder, By } = require("selenium-webdriver")
var assert = require('assert');

describe("Comprar Produto", function () {
    
    let driver

    this.timeout(10000)

    beforeEach(async function() {
        driver = await new Builder().forBrowser("chrome").build()
        await driver.manage().setTimeouts({implicit: 10000})
        
    })


    afterEach(async function() {
        await driver.quit();
    })

    
    it("Fazer login com êxito", async () => {
        await driver.get("https://www.saucedemo.com")
        await driver.findElement(By.css("[data-test='username']")).sendKeys("standard_user")
        await driver.findElement(By.css("[data-test='password']")).sendKeys("secret_sauce")
        await driver.findElement(By.css("[data-test='login-button']")).click()

        assert.equal(await driver.findElement(By.css("[data-test='title']")).getText(), "Products")
    }) 

})
