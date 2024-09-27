const { Builder, By, Key } = require("selenium-webdriver");

describe("add another todo test", function () {

    it("successfully adds another todo to application", async function () {
        const chai = await import("chai");
        const should = chai.should();

        let driver = await new Builder().forBrowser("chrome").build();

        try {
            await driver.get("https://lambdatest.github.io/sample-todo-app/");
            await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

            let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
                return value;
            });

            todoText.should.equal("Learn Selenium");

            await driver.quit();
        } catch (error) {
            console.error("Error during test execution:", error);
            throw error;  // Ensure Mocha catches the failure
        }
    });
    // it("should fail because of incorrect text assertion", async function () {
    //     const chai = await import("chai");
    //     const should = chai.should();

    //     let driver = await new Builder().forBrowser("chrome").build();

    //     try {
    //         await driver.get("https://lambdatest.github.io/sample-todo-app/");
    //         await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

    //         let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
    //             return value;
    //         });

    //         todoText.should.equal("Learn JavaSasdasdacript");  // Incorrect assertion

    //         await driver.quit();
    //     } catch (error) {
    //         console.error("Error during test execution:", error);
    //         throw error;  // Rethrow error to fail the test
    //     }
    // });
});
