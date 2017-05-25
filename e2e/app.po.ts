import { browser, element, by } from 'protractor';

export class WaterPoloPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('polo-root h1')).getText();
  }
}
