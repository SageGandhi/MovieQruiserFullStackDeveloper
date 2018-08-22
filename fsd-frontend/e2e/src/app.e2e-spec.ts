import { AppPage } from './app.po';
import {browser,by,element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should Display Movie Cruiser Application As Title', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('Movie Cruiser Application');
  });
});
