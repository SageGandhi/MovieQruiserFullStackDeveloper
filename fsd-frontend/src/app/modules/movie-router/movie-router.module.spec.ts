import { MovieRouterModule } from './movie-router.module';

describe('MovieRouterModule', () => {
  let movieRouterModule: MovieRouterModule;

  beforeEach(() => {
    movieRouterModule = new MovieRouterModule();
  });

  it('should create an instance', () => {
    expect(movieRouterModule).toBeTruthy();
  });
});
