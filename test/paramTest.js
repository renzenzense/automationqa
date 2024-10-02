const { Builder, By, Key } = require("selenium-webdriver");
const ltCapabilities = require("../capabilities")

describe("add another todo test", function () {

    var driver;

    const gridURL = "https://renzlaurennn:dgkV6GOXw8GZdjaW5oVSlUK4ANI3GrnSlFs7JNnCC0s4UgDsyx@hub.lambdatest.com/wd/hub"

    browsers = [
        { browser: "Chrome", bVersion: "93.0", os: "Windows 10" },
        { browser: "Firefox", bVersion: "91.0", os: "Windows 10" },
        { browser: "Firefox", bVersion: "90.0", os: "Windows 10" }
    ];

    browsers.forEach(({ browser, bVersion, os }) => {

        
        // it block
        it(`successfully adds a todo to for browser ${browser}, ${bVersion}, ${os}`, async function () {
            const chai = await import("chai");
            const should = chai.should();

            ltCapabilities.capability.platformName = os
            ltCapabilities.capability.browserName = browser
            ltCapabilities.capability.browserVersion = bVersion
            
            // let driver = await new Builder().forBrowser("chrome").build();
            
            ltCapabilities.capability["LT:Options"].name = this.test.title; // specify test scenario
            driver = new Builder()
            .usingServer(gridURL)
            .withCapabilities(ltCapabilities.capability)
            .build();
            
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
    });
});
