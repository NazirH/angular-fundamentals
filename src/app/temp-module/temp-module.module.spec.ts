import { TempModuleModule } from './temp-module.module';

describe('TempModuleModule', () => {
  let tempModuleModule: TempModuleModule;

  beforeEach(() => {
    tempModuleModule = new TempModuleModule();
  });

  it('should create an instance', () => {
    expect(tempModuleModule).toBeTruthy();
  });
});
