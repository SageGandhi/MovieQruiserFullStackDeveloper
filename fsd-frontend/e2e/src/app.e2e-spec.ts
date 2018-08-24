import { AppPage } from './app.po';
import {browser,by,element} from 'protractor';

describe('Movie Cruiser Angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  //cd .\node_modules\protractor\node_modules\webdriver-manager\bin\
  //node .\webdriver-manager update
  it('Should Display Movie Cruiser Application As Title', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('Movie Cruiser Application');
  });

  it('Should Be Redirected To /login Route On Opening The Application', () => {
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('Should Be Redirected To /register Route On Clicking The Register Button', () => {
    browser.element(by.css('.test-register-button')).click();
    expect(browser.getCurrentUrl()).toContain('/register');
  });

  it('Should Be Register A User On Clicking The Register Button', () => {
    browser.element(by.css('input[type=email]')).sendKeys('Prajit.Gandhi@cognizant.com');
    browser.element(by.css('input[type=password]')).sendKeys('P@ssw0rd');
    browser.element(by.css('input[type=text]')).sendKeys('Prajit.Gandhi@cognizant.com');
    browser.element(by.css('.test-register-button')).click();
    browser.sleep(5000);//Showing MatSanckBar,FsdMoviecruiserAuthenticatorServiceApplication Service Running
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('Should Be Able To Login Using Register User On Clicking The Login Button', () => {
    browser.element(by.css('input[type=email]')).sendKeys('Prajit.Gandhi@cognizant.com');
    browser.element(by.css('input[type=password]')).sendKeys('P@ssw0rd');
    browser.element(by.css('.test-login-button')).click();
    browser.sleep(5000);//Showing MatSanckBar,FsdMoviecruiserAuthenticatorServiceApplication Service Running
    expect(browser.getCurrentUrl()).toContain('/movies/popular');
  });
  it('Should Be Able To AddToWatchList On Clicking The AddToWatchList Button In Popular Page', () => {
    browser.sleep(5000);//Loading Movies,BackEnd Service Running
    let searchItems = element.all(by.css('.classAddtoWatchlist'));
    searchItems.get(0).click();//Click On The First Movie To Be WatchListed
    expect(searchItems.count()).toBeGreaterThan(0);
    expect(browser.getCurrentUrl()).toContain('/movies/popular');
  });
  it('Should Be Able To AddToWatchList On Clicking The AddToWatchList Button In Top Rated Page', () => {
    browser.element(by.css('.movies_top_rated')).click();
    browser.sleep(5000);//Loading Movies,BackEnd Service Running
    let searchItems = element.all(by.css('.classAddtoWatchlist'));
    searchItems.get(0).click();//Click On The First Movie To Be WatchListed
    expect(searchItems.count()).toBeGreaterThan(0);
    expect(browser.getCurrentUrl()).toContain('/movies/top_rated');
  });
  it('Should Be Able To AddToWatchList On Clicking The AddToWatchList Button In Search Page', () => {
    browser.element(by.css('.movies_searchMovie')).click();
    browser.sleep(1000);//Loading Page
    browser.element(by.css('.search4MoviesInput')).sendKeys('Harry Potter');
    browser.element(by.css('.search4MoviesButton')).click();
    browser.sleep(5000);//Loading Movies,BackEnd Service Running

    let searchItems = element.all(by.css('.classAddtoWatchlist'));
    expect(searchItems.count()).toBeGreaterThan(0);
    searchItems.get(0).click();//Click On The First Movie To Be WatchListed
    expect(browser.getCurrentUrl()).toContain('/movies/searchMovie');
  });
  it('Should Be Able To View All Movies AddedToWatchList On Clicking The WatchList Button In WatchList Page', () => {
    browser.element(by.css('.movies_watchlist')).click();
    browser.sleep(5000);//Loading Movies,BackEnd Service Running
    let searchItems = element.all(by.css('.classDeleteFromWatchlist'));
    expect(searchItems.count()).toBe(3);
    expect(browser.getCurrentUrl()).toContain('/movies/watchlist');
  });
  it('Should Be Able To Update All Movies AddedToWatchList On Clicking The WatchList Button In WatchList Page', () => {
    browser.element(by.css('.movies_watchlist')).click();
    browser.sleep(5000);//Loading Movies,BackEnd Service Running

    let searchItems = element.all(by.css('.classUpdatetoWatchlist'));
    searchItems.get(0).click();//Open Popup
    browser.sleep(1000);//Loading Popup

    browser.element(by.css('.watchListMovieComment')).sendKeys('MustWatch!!!');
    browser.element(by.css('.watchListMovieCommentButtonUpdate')).click();
    expect(browser.getCurrentUrl()).toContain('/movies/watchlist');
  });
  it('Should Be Able To Delete A Movies On Clicking The Delete Button In WatchList Page', () => {
    browser.element(by.css('.movies_watchlist')).click();
    browser.sleep(5000);//Loading Movies,BackEnd Service Running

    let searchItems = element.all(by.css('.classDeleteFromWatchlist'));
    expect(searchItems.count()).toBe(3);
    searchItems.get(0).click();
    browser.sleep(1000);//Waiting For Deletion

    searchItems = element.all(by.css('.classDeleteFromWatchlist'));
    expect(searchItems.count()).toBe(2);
    expect(browser.getCurrentUrl()).toContain('/movies/watchlist');
  });
  it('Should Be Able To LogOut Using Logout Menu On Clicking The Logout Button', () => {
    browser.element(by.css('.logout')).click();
    browser.sleep(5000);//Showing MatSanckBar,FsdMoviecruiserAuthenticatorServiceApplication Service Running
    expect(browser.getCurrentUrl()).toContain('/login');
  });
});
