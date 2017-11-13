import { BeinghealerPage } from './app.po';

describe('beinghealer App', () => {
  let page: BeinghealerPage;

  beforeEach(() => {
    page = new BeinghealerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
