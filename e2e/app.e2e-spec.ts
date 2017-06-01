import { AngularCliModulesSubroutesPage } from './app.po';

describe('angular-cli-modules-subroutes App', () => {
  let page: AngularCliModulesSubroutesPage;

  beforeEach(() => {
    page = new AngularCliModulesSubroutesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
