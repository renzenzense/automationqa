const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

async function example() {
    // Dynamically import chai
    const chai = await import("chai");
    const should = chai.should();

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // add a todo entry
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

    // assert
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText();

    // assert using chai should
    todoText.should.equal("Learn Selenium");

    // close the browser (best practice)
    // await driver.quit();
}

example();
