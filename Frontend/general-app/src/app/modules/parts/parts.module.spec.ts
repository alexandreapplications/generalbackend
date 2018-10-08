import { PartsModule } from './parts.module';

describe('PartsModule', () => {
  let partsModule: PartsModule;

  beforeEach(() => {
    partsModule = new PartsModule();
  });

  it('should create an instance', () => {
    expect(partsModule).toBeTruthy();
  });
});
