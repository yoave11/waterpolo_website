import { WaterPoloPage } from './app.po';

describe('water-polo App', () => {
  let page: WaterPoloPage;

  beforeEach(() => {
    page = new WaterPoloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('polo works!');
  });
});
