import { PlatoModule } from './plato.module';

describe('PlatoModule', () => {
  let platoModule: PlatoModule;

  beforeEach(() => {
    platoModule = new PlatoModule();
  });

  it('should create an instance', () => {
    expect(platoModule).toBeTruthy();
  });
});
