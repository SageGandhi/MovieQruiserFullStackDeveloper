import { AuthenticationRouterModule } from './authentication-router.module';

describe('AuthenticationRouterModule', () => {
  let authenticationRouterModule: AuthenticationRouterModule;

  beforeEach(() => {
    authenticationRouterModule = new AuthenticationRouterModule();
  });

  it('should create an instance', () => {
    expect(authenticationRouterModule).toBeTruthy();
  });
});
