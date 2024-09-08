const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");

async function example(){
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

    // assert
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value
    });

    assert.strictEqual(todoText, "Learn Javascript");

    // close the browser (best practice)
    // await driver.quit();
}

example()

// learning from LambdaTest from youtube 
// https://www.youtube.com/watch?v=BQ-9e13kJ58

// also testing if issue persist in github account T_T