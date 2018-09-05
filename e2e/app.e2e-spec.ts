import { CoreUIPage } from './app.po';

describe('core-ui App', function() {
  let page: CoreUIPage;

  beforeEach(() => {
    page = new CoreUIPage();
  });

  it('should display footer containing', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('2018');
  });
});
