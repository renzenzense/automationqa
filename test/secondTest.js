const { Builder, By, Key } = require("selenium-webdriver");
const ltCapabilities = require("../capabilities")

describe("add another todo test", function () {

    var driver;

    const gridURL = "https://renzlaurennn:dgkV6GOXw8GZdjaW5oVSlUK4ANI3GrnSlFs7JNnCC0s4UgDsyx@hub.lambdatest.com/wd/hub"

    beforeEach(function(){
        ltCapabilities.capability["LT:Options"].name = this.currentTest.title; // specify test scenario
        driver = new Builder()
        .usingServer(gridURL)
        .withCapabilities(ltCapabilities.capability)
        .build();
    });

    afterEach(async function(){
        
        await driver.quit();
    });

    // it block
    it("successfully adds another todo to application", async function () {
        const chai = await import("chai");
        const should = chai.should();

        // let driver = await new Builder().forBrowser("chrome").build();

        try {
            await driver.get("https://lambdatest.github.io/sample-todo-app/");
            await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

            let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
                return value;
            });

            todoText.should.equal("Learn Selenium");

        } catch (error) {
            console.error("Error during test execution:", error);
            throw error;  // Ensure Mocha catches the failure
        }
    });

    it("Learn JavaScript", async function () {
        const chai = await import("chai");
        const should = chai.should();

        // let driver = await new Builder().forBrowser("chrome").build();

        try {
            await driver.get("https://lambdatest.github.io/sample-todo-app/");
            await driver.findElement(By.id("sampletodotext")).sendKeys("Learn JavaScript", Key.RETURN);

            let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
                return value;
            });

            todoText.should.equal("Learn JavaScript"); 

        } catch (error) {
            console.error("Error during test execution:", error);
            throw error;  // Rethrow error to fail the test
        }
    });
});
