import { AppenangularPage } from './app.po';

describe('appenangular App', () => {
  let page: AppenangularPage;

  beforeEach(() => {
    page = new AppenangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
