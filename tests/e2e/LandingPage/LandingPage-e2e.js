const webdriver = require('selenium-webdriver');
import { rgbaToHex } from '../../../src/js/services/colorConvertionService'
import { expect } from 'chai';

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
const By = webdriver.By;
const until = webdriver.until;

// Take values from config
const githubUsernameFontSize = '30px';
const generateButtonColor = '#337AB7';

describe('Landing Page', function () {
  // e2e tests are too slow for default Mocha timeout
  this.timeout(10000);

  before(function() {
    return driver.navigate().to('http://localhost:80/')
  });

  it('.github-username input should exist', function(done) {
    driver.findElement(By.css('.github-username'));
    done();
  });

  it('.github-username-title element should exist', function(done) {
    driver.findElement(By.css('.github-username-title'))
      .getCssValue('font-size').then(fontSize => {
        expect(fontSize).to.equal(githubUsernameFontSize);
        done();
      });
  });

  it('.generate-button button should exist', function(done) {
    driver.findElement(By.css('.generate-button')).getCssValue('background-color')
    .then(color => {

      expect(rgbaToHex(color)).to.equal(generateButtonColor);
      done();
    });
  });

  after(function(done) {
    driver.quit()
      .then(() => done())
  });
});
