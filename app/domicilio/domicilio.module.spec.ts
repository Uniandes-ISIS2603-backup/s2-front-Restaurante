import { DomicilioModule } from './domicilio.module';

describe('DomicilioModule', () => {
  let domicilioModule: DomicilioModule;

  beforeEach(() => {
    domicilioModule = new DomicilioModule();
  });

  it('should create an instance', () => {
    expect(domicilioModule).toBeTruthy();
  });
});
