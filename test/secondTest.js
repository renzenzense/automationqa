const { Builder, By, Key } = require("selenium-webdriver");

// describe block
describe("add another todo test", function () {

    // it block
    it("succesfully adds another todo to appilication", async function () {

        // Dynamically import chai
        const chai = await import("chai");
        const should = chai.should();

        // launch browser
        let driver = await new Builder().forBrowser("chrome").build();

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
            // Log the error but keep the browser open for debugging
            console.error("Error during test execution:", error);

            process.exit(1); // error counter indicator
        }

    });

});

