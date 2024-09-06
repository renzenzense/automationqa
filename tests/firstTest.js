const {Builder, By, Key} = require ("selenium-webdriver");

async function example(){
    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app/")

    // add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

    // close the browser (best practice)
    await driver.quit();
}

example()