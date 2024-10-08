const { Builder, By, Key } = require("selenium-webdriver");
const ltCapabilities = require("../capabilities")

// describe block
describe("add todo test", function () {

    var driver;

    const gridURL = "https://renzlaurennn:dgkV6GOXw8GZdjaW5oVSlUK4ANI3GrnSlFs7JNnCC0s4UgDsyx@hub.lambdatest.com/wd/hub"

    beforeEach(function(){
        ltCapabilities.capability["LT:Options"].name = this.currentTest.title; // specify test scenario
        driver = new Builder()
        .usingServer(gridURL)
        .withCapabilities(ltCapabilities.capability)
        .build();

    });

    // it block
    it("successfully adds a todo to application", async function () {

        // Dynamically import chai
        const chai = await import("chai");
        const should = chai.should();

        // launch browser
        // let driver = await new Builder().forBrowser("chrome").build();

        try {
            // navigate to application
            await driver.get("https://lambdatest.github.io/sample-todo-app/");

            // add a todo entry
            await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

            // assert
            let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
                return value;
            });

            // assert using chai should
            todoText.should.equal("Learn Selenium");

            // close the browser if no error occurs
            await driver.quit();

        } catch (error) {
            // Log the error for debugging
            console.error("Error during test execution:", error);

            // Rethrow the error to ensure the test fails properly
            throw error;
        }

    });

});
