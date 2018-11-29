import { MesaModule } from './mesa.module';

describe('MesaModule', () => {
  let mesaModule: MesaModule;

  beforeEach(() => {
    mesaModule = new MesaModule();
  });

  it('should create an instance', () => {
    expect(mesaModule).toBeTruthy();
  });
});
