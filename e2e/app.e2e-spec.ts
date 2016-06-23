import { ChttpPage } from './app.po';

describe('chttp App', function() {
  let page: ChttpPage;

  beforeEach(() => {
    page = new ChttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
